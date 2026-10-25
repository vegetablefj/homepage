"""Install pinned, project-local Jing dependencies (no system changes)."""
from pathlib import Path
import hashlib
import json
import platform
import shutil
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / '.build/cache/validation'
JING = {
    'file': 'jing-20241231.jar',
    'url': 'https://repo.maven.apache.org/maven2/org/relaxng/jing/20241231/jing-20241231.jar',
    'sha256': 'ea5e9026244d977e607d8b52212d6871498ece51939f9c49d0e7a77aad91133a',
}
WINDOWS_JRE = {
    'file': 'jre.zip',
    'url': 'https://github.com/adoptium/temurin21-binaries/releases/download/jdk-21.0.12.1%2B1/OpenJDK21U-jre_x64_windows_hotspot_21.0.12.1_1.zip',
    'sha256': 'd35f31e712f0fcf6ac5a093edc90204fbff22f720ba3950bd09d331d5e621636',
}
JRE_DIRECTORY = 'jdk-21.0.12.1+1-jre'


def download(package):
    CACHE.mkdir(parents=True, exist_ok=True)
    target = CACHE / package['file']
    if target.is_file() and hashlib.sha256(target.read_bytes()).hexdigest() == package['sha256']:
        return target
    request = urllib.request.Request(package['url'], headers={'User-Agent': 'homepage-validation-setup'})
    with urllib.request.urlopen(request, timeout=120) as response:
        data = response.read()
    if hashlib.sha256(data).hexdigest() != package['sha256']:
        raise RuntimeError('Checksum mismatch: ' + package['file'])
    target.write_bytes(data)
    return target


def main():
    jar = download(JING)
    java = shutil.which('java')
    if java is None:
        if platform.system() != 'Windows' or platform.machine().lower() not in {'amd64', 'x86_64'}:
            raise RuntimeError('Install Java 8 or later, then run this setup again.')
        archive_path = download(WINDOWS_JRE)
        with zipfile.ZipFile(archive_path) as archive:
            for member in archive.infolist():
                if not (CACHE / member.filename).resolve().is_relative_to(CACHE.resolve()):
                    raise RuntimeError('Unsafe Java archive path')
            archive.extractall(CACHE)
        java = str(CACHE / JRE_DIRECTORY / 'bin/java.exe')
    print(json.dumps({'java': java, 'jing': str(jar), 'version': '20241231'}, indent=2))


if __name__ == '__main__':
    main()
