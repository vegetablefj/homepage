"""Use packaged CSS with the active PreTeXt target's computed settings."""
import json


def use_packaged_theme(xml, pub_var_dict, tmp_dir):
    """Match both native HTML and theme-command callback signatures."""
    from pretext import core

    # These variables already resolve the publication selected for this target.
    # Reading the main-site publication here would ignore note overrides.
    variables = core.pretext.common
    theme = variables.get_publisher_variable(pub_var_dict, 'html-theme-name')
    options = json.loads(variables.get_publisher_variable(pub_var_dict, 'html-theme-options'))
    core.pretext._move_prebuilt_theme(theme, options, tmp_dir)
