"""Ensure separate targets retain their own native theme settings."""
import json
import unittest
from unittest.mock import patch

from runtime import configure
configure()
from pretext import core
from pretext_theme import use_packaged_theme


class ActiveTargetTheme(unittest.TestCase):
    def test_note_and_main_settings_do_not_leak_between_targets(self):
        main = {'html-theme-name': 'default-modern',
                'html-theme-options': json.dumps({'options': {
                    'palette': 'blue-red', 'provide-dark-mode': 'no'}})}
        note = {'html-theme-name': 'denver',
                'html-theme-options': json.dumps({'options': {
                    'palette': 'green-blue', 'primary-color': '#123456'},
                    'contrast-checks': {'primary-color': '#fff'}})}
        with patch.object(core.pretext, '_move_prebuilt_theme') as copy_theme:
            use_packaged_theme('note.ptx', note, 'note-output')
            # The native theme command uses keywords; HTML uses positional args.
            use_packaged_theme(xml='main.ptx', pub_var_dict=main, tmp_dir='main-output')
        self.assertEqual(copy_theme.call_args_list[0].args,
                         ('denver', json.loads(note['html-theme-options']), 'note-output'))
        self.assertEqual(copy_theme.call_args_list[1].args,
                         ('default-modern', json.loads(main['html-theme-options']), 'main-output'))

    def test_missing_native_settings_fail_instead_of_falling_back_to_main(self):
        with self.assertRaises(ValueError):
            use_packaged_theme('note.ptx', {}, 'note-output')


if __name__ == '__main__':
    unittest.main()
