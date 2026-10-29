"""Check that a rebuilt site preserves existing URLs, anchors, and reading text."""

import argparse
from copy import deepcopy
import json
from pathlib import Path

from runtime import configure
configure()
from lxml import html


ROOT = Path(__file__).resolve().parent.parent
PROHIBITED_ROOTS = {
    '.git', '.github', '.private', '.venv', '.cache', '.build',
    'source', 'publication', 'tools', 'planning', 'research', 'prompts',
}
PROHIBITED_FILES = {'build.py', 'project.ptx', 'requirements.txt', 'AGENTS.md'}
REQUIRED_OUTPUT = ('index.html', 'CNAME', '.nojekyll')


def normalized_text(nodes):
    """Read authored prose and math while ignoring scripts and formatting space."""
    text = []
    for original in nodes:
        node = deepcopy(original)
        for child in node.xpath('.//script | .//style | .//comment()'):
            child.getparent().remove(child)
        text.append(' '.join(''.join(node.itertext()).split()))
    return text


def reading_contract(path):
    document = html.parse(str(path))
    content = document.xpath('//*[@id="ptx-content"]')
    if not content:
        content = document.xpath('//body') or [document.getroot()]
    classes = lambda name: document.xpath(
        '//*[contains(concat(" ", normalize-space(@class), " "), $class)]',
        **{'class': ' ' + name + ' '})
    return {
        'anchors': set(document.xpath('//*[@id]/@id')),
        'reading_text': normalized_text(content),
        'note_metadata': normalized_text(classes('note-metadata')),
        'margin_text': normalized_text(classes('margin-note')),
        'home_profile': normalized_text(document.xpath('//*[@id="home-profile"]')),
    }


def check_site(site, baseline_root=None):
    """Inspect files only; return findings without altering either input tree."""
    site = Path(site).resolve(strict=True)
    prohibited = sorted(p.name for p in site.iterdir()
                        if p.name in PROHIBITED_ROOTS or p.name in PROHIBITED_FILES)
    report = {
        'site': str(site),
        'baseline_root': str(baseline_root) if baseline_root else None,
        'baseline_paths_checked': 0,
        'html_pages_checked': 0,
        'missing_paths': [],
        'missing_anchors': [],
        'changed_reading_text': [],
        'changed_note_metadata': [],
        'changed_margin_text': [],
        'changed_home_profile': [],
        'prohibited_output_paths': prohibited,
        'missing_required_output': [name for name in REQUIRED_OUTPUT if not (site / name).is_file()],
        'symlinks': sorted(p.relative_to(site).as_posix()
                           for p in site.rglob('*') if p.is_symlink()),
    }
    if baseline_root is not None:
        baseline_root = Path(baseline_root).resolve(strict=True)
        manifest = json.loads((baseline_root / '.site-files.json').read_text(encoding='utf-8-sig'))
        for relative in manifest:
            relative_path = Path(relative)
            baseline = (baseline_root / relative_path).resolve()
            target = (site / relative_path).resolve()
            if (relative_path.is_absolute() or not baseline.is_relative_to(baseline_root)
                    or not target.is_relative_to(site)):
                raise ValueError('Unsafe path in baseline manifest: ' + relative)
            report['baseline_paths_checked'] += 1
            if not target.is_file():
                report['missing_paths'].append(relative)
                continue
            if relative_path.suffix.lower() != '.html':
                continue
            if not baseline.is_file():
                raise ValueError('Baseline manifest file is missing: ' + relative)
            old = reading_contract(baseline)
            new = reading_contract(target)
            report['html_pages_checked'] += 1
            missing = sorted(old['anchors'] - new['anchors'])
            if missing:
                report['missing_anchors'].append({'path': relative, 'anchors': missing})
            for key in ('reading_text', 'note_metadata', 'margin_text', 'home_profile'):
                if old[key] != new[key]:
                    report['changed_' + key].append(relative)
    finding_keys = ('missing_paths', 'missing_anchors', 'changed_reading_text',
                    'changed_note_metadata', 'changed_margin_text',
                    'changed_home_profile', 'prohibited_output_paths',
                    'missing_required_output', 'symlinks')
    report['passed'] = not any(report[key] for key in finding_keys)
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site', type=Path, default=ROOT / '.build/site')
    parser.add_argument('--baseline-root', type=Path,
                        help='Former publishing root with its .site-files.json manifest.')
    parser.add_argument('--site-only', action='store_true',
                        help='Check the output boundary without the local migration backup.')
    parser.add_argument('--report', type=Path, default=ROOT / '.build/reports/site-contract.json')
    args = parser.parse_args()
    if args.site_only and args.baseline_root:
        parser.error('--site-only and --baseline-root cannot be combined.')
    baseline = args.baseline_root
    if not args.site_only and baseline is None:
        backup_report = ROOT / '.build/reports/history-cleanup-backup.json'
        if not backup_report.is_file():
            parser.error('Supply --baseline-root, or use --site-only for output checks.')
        backup = json.loads(backup_report.read_text(encoding='utf-8-sig'))
        baseline = Path(backup['backup']) / 'workingtree'
    result = check_site(args.site, baseline)
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(result, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({key: value for key, value in result.items()
                      if not isinstance(value, list)} | {
        key: len(value) for key, value in result.items() if isinstance(value, list)}))
    if not result['passed']:
        raise SystemExit('Site contract failed. See ' + str(args.report))


if __name__ == '__main__':
    main()
