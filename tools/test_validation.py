"""Positive and negative controls for the project's real Jing validator.

Run after tools/setup_validation.py. Fixtures remain under the project's
ignored scratch directory and are removed when each test completes.
"""
from pathlib import Path
import tempfile
import unittest

from validate_sources import ROOT, jing_command, validate_file


SCHEMA = ROOT / '.build/cache/core/schema/pretext.rng'
SCRATCH = ROOT / '.build/tmp'
RNG_NS = 'http://relaxng.org/ns/structure/1.0'


def article(body):
    return ('<pretext><article><title>Validation control</title>'
            + body + '</article></pretext>')


class ValidationControls(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.command = jing_command()
        if not SCHEMA.is_file():
            raise RuntimeError('The pinned PreTeXt schema has not been installed.')
        SCRATCH.mkdir(parents=True, exist_ok=True)
        if not SCRATCH.resolve().is_relative_to(ROOT.resolve()):
            raise RuntimeError('Validation scratch must remain inside the project.')

    def setUp(self):
        temporary = tempfile.TemporaryDirectory(prefix='rng-regression-', dir=SCRATCH)
        self.directory = Path(temporary.name).resolve()
        # TemporaryDirectory owns this exact directory; no shared scratch or
        # generated site directory is used or removed by these tests.
        self.assertTrue(self.directory.is_relative_to(SCRATCH.resolve()))
        self.addCleanup(temporary.cleanup)

    def check(self, content, valid, name='control', schema=SCHEMA):
        source = self.directory / (name + '.xml')
        assembled = self.directory / (name + '-assembled.xml')
        source.write_text(content, encoding='utf-8')
        result = validate_file(source, schema, assembled, self.command)
        self.assertEqual(result['valid'], valid, result['messages'])
        if not valid:
            self.assertTrue(result['messages'], 'Invalid XML must produce a diagnostic.')
        return result

    def test_minimal_pretext_document(self):
        self.check(article('<p>A valid paragraph.</p>'), True)

    def test_unknown_element_is_rejected(self):
        self.check(article('<p>Text <not-pretext/></p>'), False)

    def test_image_description_requires_paragraph(self):
        def image(description):
            return article('<figure><caption>A test image.</caption>'
                           '<image source="control.svg"><description>'
                           + description + '</description></image></figure>')
        self.check(image('<p>A simple diagram.</p>'), True, 'description-valid')
        self.check(image('A simple diagram.'), False, 'description-invalid')

    def test_multiline_equation_id_belongs_to_row(self):
        self.check(article('<p><md number="yes">'
                           '<mrow xml:id="eq-first">a=b</mrow>'
                           '<mrow>c=d</mrow></md></p>'), True, 'multiline-valid')
        self.check(article('<p><md number="yes" xml:id="eq-parent">'
                           '<mrow>a=b</mrow><mrow>c=d</mrow>'
                           '</md></p>'), False, 'multiline-invalid')

    def test_external_reference_has_its_own_pattern_scope(self):
        # Both grammars independently define Group. libxml2 2.11.9 can report
        # a spurious missing Group when the external grammar is visited first.
        # Jing must accept both the original and its alpha-renamed equivalent.
        child = self.directory / 'child.rng'
        child.write_text(
            f'<grammar xmlns="{RNG_NS}">'
            '<start><element name="diagram"><ref name="Group"/></element></start>'
            '<define name="Group"><element name="g"><empty/></element></define>'
            '</grammar>', encoding='utf-8')
        parent_text = (
            f'<grammar xmlns="{RNG_NS}"><start><element name="root">'
            '<externalRef href="child.rng"/><ref name="Group"/>'
            '</element></start><define name="Group">'
            '<element name="em"><empty/></element></define></grammar>')
        document = '<root><diagram><g/></diagram><em/></root>'
        for name, text in [('parent', parent_text),
                           ('renamed', parent_text.replace('"Group"', '"OuterGroup"'))]:
            schema = self.directory / (name + '.rng')
            schema.write_text(text, encoding='utf-8')
            self.check(document, True, name, schema)


if __name__ == '__main__':
    unittest.main()
