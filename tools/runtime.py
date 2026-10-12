"""Optional dependency search path for locally managed Python environments."""
import os
import sys
from pathlib import Path


def configure():
    path = os.environ.get("PRETEXT_PYTHONPATH")
    if path:
        directory = Path(path).expanduser().resolve()
        if not directory.is_dir():
            raise RuntimeError("PRETEXT_PYTHONPATH must point to an existing package directory")
        sys.path.insert(0, str(directory))
