"""Run PreTeXt with project-local cache and optional isolated dependencies."""
from pathlib import Path
import runpy
import sys
import stat
import tempfile

PROJECT = Path(__file__).resolve().parent.parent
from runtime import configure
configure()
BUILD_TEMP = PROJECT / ".build/tmp"
BUILD_TEMP.mkdir(parents=True, exist_ok=True)
tempfile.tempdir = str(BUILD_TEMP)
from pretext import resources

resources._RESOURCE_BASE_PATH = PROJECT / ".build/cache"
from pretext import core

# Copies of read-only source PDFs must still be removable from scratch space.
original_cleanup = core.release_temporary_directories
def cleanup_scratch(any_log_level):
    for name in getattr(core.pretext.common, '__temps', []):
        directory = Path(name).resolve()
        if not directory.is_relative_to(BUILD_TEMP.resolve()):
            raise RuntimeError('Unexpected PreTeXt scratch directory')
        for path in directory.rglob('*'):
            if path.is_file():
                path.chmod(path.stat().st_mode | stat.S_IWRITE)
    original_cleanup(any_log_level)
core.release_temporary_directories = cleanup_scratch
core.pretext.release_temporary_directories = cleanup_scratch

# The local, read-only note has no Runestone components. The companion XSL
# suppresses its HTML header, so its optional service bundle is unnecessary.
core.pretext._place_runestone_services = lambda *args, **kwargs: None
core.pretext._cdn_runestone_services = lambda *args, **kwargs: None

def use_packaged_theme(xml, publisher_variables, temporary_directory):
    """Use official CSS and honor the publication's native color options."""
    from lxml import etree
    publication = etree.parse(str(PROJECT / "publication/publication.ptx"))
    css = publication.find("html/css")
    options = {key: value for key, value in css.attrib.items() if key != "theme"}
    core.pretext._move_prebuilt_theme(css.get("theme", "default-modern"), {"options": options}, temporary_directory)

core.pretext.build_or_copy_theme = use_packaged_theme
runpy.run_module("pretext", run_name="__main__")
