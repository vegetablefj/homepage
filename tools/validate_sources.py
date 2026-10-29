"""Validate every active PreTeXt source with the unchanged pinned content RNG."""
from pathlib import Path
import hashlib
import json
import shutil
import subprocess
import sys
import tempfile

from runtime import configure
configure()
from lxml import etree
from setup_validation import CACHE, JING, JRE_DIRECTORY, ROOT


def content_schema():
    """Bootstrap the pinned package's resources without replacing existing caches."""
    schema = ROOT / '.build/cache/core/schema/pretext.rng'
    if not schema.is_file():
        from pretext import resources
        scratch = ROOT / '.build/tmp'
        scratch.mkdir(parents=True, exist_ok=True)
        previous = resources._RESOURCE_BASE_PATH
        try:
            with tempfile.TemporaryDirectory(prefix='validation-bootstrap-', dir=scratch) as directory:
                resources._RESOURCE_BASE_PATH = Path(directory) / 'resources'
                resources.install()
                for item in resources._RESOURCE_BASE_PATH.iterdir():
                    target = ROOT / '.build/cache' / item.name
                    if item.is_dir():
                        shutil.copytree(item, target, dirs_exist_ok=True)
                    elif not target.exists():
                        shutil.copy2(item, target)
        finally:
            resources._RESOURCE_BASE_PATH = previous
    return schema


def jing_command():
    jar = CACHE / JING['file']
    local_java = CACHE / JRE_DIRECTORY / 'bin/java.exe'
    java = str(local_java) if local_java.is_file() else shutil.which('java')
    if java is None or not jar.is_file():
        raise RuntimeError('Validation dependencies are missing. Run: python tools/setup_validation.py')
    if hashlib.sha256(jar.read_bytes()).hexdigest() != JING['sha256']:
        raise RuntimeError('Jing checksum mismatch. Run: python tools/setup_validation.py')
    return [java, '-jar', str(jar)]


def validate_file(source, schema, assembled, command=None):
    parser = etree.XMLParser(load_dtd=True, resolve_entities=True, no_network=True)
    document = etree.parse(str(source), parser)
    document.xinclude()
    # Validate XInclude-expanded authored vocabulary, omitting only provenance
    # xml:base attributes. This is not native version/edition filtering.
    for node in document.iter():
        node.attrib.pop('{http://www.w3.org/XML/1998/namespace}base', None)
    assembled.parent.mkdir(parents=True, exist_ok=True)
    document.write(str(assembled), encoding='utf-8', xml_declaration=True)
    result = subprocess.run((command or jing_command()) + [str(schema), str(assembled)],
                            capture_output=True, text=True, encoding='utf-8', timeout=120)
    messages = (result.stdout + result.stderr).strip()
    if result.returncode not in (0, 1):
        raise RuntimeError('Jing did not complete validation: ' + messages)
    return {'source': source.relative_to(ROOT).as_posix(),
            'schema': schema.name, 'schema_sha256': hashlib.sha256(schema.read_bytes()).hexdigest(),
            'valid': result.returncode == 0 and not messages, 'messages': messages,
            'assembled': assembled.relative_to(ROOT).as_posix()}


def main():
    from note_catalog import ensure_catalog
    ensure_catalog(ROOT)
    project = etree.parse(str(ROOT / 'project.ptx'))
    report_dir = ROOT / '.build/reports/validation'
    command = jing_command()
    results = []
    selected = set(sys.argv[1:])
    unknown = selected - {target.get('name') for target in project.xpath('//target')}
    if unknown:
        raise RuntimeError('Unknown build target(s): ' + ', '.join(sorted(unknown)))
    schema = content_schema()
    for target in project.xpath('//target'):
        name = target.get('name')
        if selected and name not in selected:
            continue
        results.append({'target': name, 'kind': 'source', **validate_file(
            ROOT / project.getroot().get('source', 'source') / target.get('source'),
            schema, report_dir / (name + '.xml'), command)})
    if not results:
        raise RuntimeError('No matching build target to validate.')
    report = {'engine': 'Jing 20241231', 'grammar_modified': False, 'checks': results,
              'passed': all(item['valid'] for item in results)}
    report_dir.mkdir(parents=True, exist_ok=True)
    (ROOT / '.build/reports/source-validation.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
    for result in results:
        print(f"{result['target']} {result['kind']}: {'passed' if result['valid'] else 'FAILED'}")
        if result['messages']:
            print(result['messages'])
    if not report['passed']:
        raise SystemExit(1)


if __name__ == '__main__':
    main()
