"""Catalog privacy, URL, and publication regression controls."""
from copy import deepcopy
import json
from pathlib import Path
import shutil
import tempfile
import unittest

from note_catalog import ROOT, ensure_catalog, load_catalog, render_catalog
from lxml import etree


class CatalogControls(unittest.TestCase):
    def setUp(self):
        scratch = ROOT / '.build/tmp'
        scratch.mkdir(parents=True, exist_ok=True)
        temporary = tempfile.TemporaryDirectory(prefix='catalog-control-', dir=scratch)
        self.addCleanup(temporary.cleanup)
        self.outer = Path(temporary.name)
        self.root = self.outer / 'repository'
        (self.root / 'config').mkdir(parents=True)
        (self.root / 'publication').mkdir()
        shutil.copy2(ROOT / 'publication/note-template.ptx', self.root / 'publication/note-template.ptx')
        self.data = {'version': 1, 'defaults': {'status': 'Under review', 'footnotes': 'margin'},
                     'notes': [self.note('first')]}

    def note(self, slug, **overrides):
        source = f'source/notes/{slug}/{slug}.ptx'
        path = self.root / source
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(f'<pretext><book xml:id="{slug}-notes">'
                        '<title>Notes on <m>X</m></title></book></pretext>', encoding='utf-8')
        return {'slug': slug, 'source': source, 'visibility': 'public',
                'description_ptx': '<p>A description with a <url href="https://example.org">source</url>.</p>',
                **overrides}

    def save(self):
        (self.root / 'config/notes.json').write_text(json.dumps(self.data), encoding='utf-8')

    def files(self):
        self.save()
        return render_catalog(self.root)

    def test_native_project_and_publication_preserve_url_and_asset_location(self):
        files = self.files()
        project = etree.fromstring(files['project.ptx'])
        self.assertEqual(project.get('output-dir'), '.build/staging')
        target = project.xpath('//target[@name="note-first"]')[0]
        self.assertEqual(target.get('source'), 'notes/first/first.ptx')
        self.assertEqual(target.get('publication'), 'generated/first.ptx')
        self.assertEqual(target.get('output-dir'), 'notes/first')
        publication = etree.fromstring(files['publication/generated/first.ptx'])
        # Exercise the pinned engine rather than assuming that publication
        # attributes resolve relative to the publication file's location.
        from pretext.core.common import get_managed_directories
        publication_path = self.root / 'publication/generated/first.ptx'
        publication_path.parent.mkdir(parents=True)
        publication_path.write_bytes(files['publication/generated/first.ptx'])
        generated, _ = get_managed_directories(
            str(self.root / 'source/notes/first/first.ptx'), str(publication_path))
        self.assertEqual(Path(generated).resolve(),
                         (self.root / 'source/notes/generated-assets').resolve())
        self.assertEqual(publication.find('html/index-page').get('ref'), 'first-notes')
        listing = etree.fromstring(files['source/generated/notes-list.ptx'])
        self.assertEqual(listing.xpath('.//url/@href'),
                         ['notes/first/first-notes.html', 'https://example.org'])
        self.assertEqual(listing.xpath('string(li/p/alert/url/m)'), 'X')

    def test_unlisted_is_built_but_not_listed_and_selection_is_separate(self):
        self.data['notes'] += [self.note('second', visibility='unlisted'),
                               self.note('third', selected=True, list_order=0)]
        files = self.files()
        project = etree.fromstring(files['project.ptx'])
        self.assertEqual(len(project.findall('targets/target')), 4)
        listed = etree.fromstring(files['source/generated/notes-list.ptx'])
        self.assertEqual(listed.xpath('li/p/alert/url/@href'),
                         ['notes/third/third-notes.html', 'notes/first/first-notes.html'])
        selected = etree.fromstring(files['source/generated/selected-notes-list.ptx'])
        self.assertEqual(selected.xpath('li/p/alert/url/@href'), ['notes/third/third-notes.html'])

    def test_private_draft_is_never_opened_built_listed_or_given_metadata(self):
        private = {'slug': 'private-draft', 'source': str(self.outer / 'private/not-read.ptx'),
                   'visibility': 'private', 'metadata': {'last_updated': '2026-10-29'}}
        self.data['notes'].append(private)
        files = self.files()
        self.assertFalse(any('private-draft' in path for path in files))
        project = etree.fromstring(files['project.ptx'])
        self.assertNotIn('note-private-draft', project.xpath('//target/@name'))
        self.assertNotIn('note-private-draft', json.loads(files['publication/generated/note-settings.json'])['notes'])
        self.assertNotIn(b'private-draft', files['source/generated/notes-list.ptx'])

    def test_private_source_inside_public_repository_is_rejected(self):
        for source in ['source/notes/first/first.ptx', str(self.root / 'source/notes/first/first.ptx')]:
            with self.subTest(source=source):
                self.data['notes'][0].update(source=source, visibility='private')
                self.save()
                with self.assertRaisesRegex(ValueError, 'outside the public repository'):
                    load_catalog(self.root)

    def test_duplicate_identifiers_sources_and_output_directories_are_rejected(self):
        first = deepcopy(self.data['notes'][0])
        for key in ('slug', 'target', 'source', 'output'):
            with self.subTest(key=key):
                second = self.note('second')
                first.setdefault('target', 'note-first')
                first.setdefault('output', 'notes/first')
                second[key] = first[key]
                self.data['notes'] = [first, second]
                self.save()
                with self.assertRaisesRegex(ValueError, 'Duplicate'):
                    load_catalog(self.root)

    def test_unsafe_paths_and_slugs_are_rejected(self):
        original = deepcopy(self.data['notes'][0])
        for key, value in [('slug', '../escape'), ('slug', 'con'),
                           ('source', 'source/notes/../../outside.ptx'),
                           ('source', str(self.outer / 'outside.ptx')),
                           ('output', 'notes/../source'), ('output', '/notes/first'),
                           ('output', 'source/first')]:
            with self.subTest(key=key, value=value):
                self.data['notes'] = [{**original, key: value}]
                self.save()
                with self.assertRaises(ValueError):
                    load_catalog(self.root)

    def test_unknown_publication_paths_and_invalid_metadata_are_rejected(self):
        original = deepcopy(self.data['notes'][0])
        for changes in [{'publication': {'../../escape': {'level': 1}}},
                        {'metadata': {'last_updated': '2026-02-31'}},
                        {'visibility': 'unlisted', 'selected': True}]:
            with self.subTest(changes=changes):
                self.data['notes'] = [{**original, **changes}]
                self.save()
                with self.assertRaises(ValueError):
                    load_catalog(self.root)

    def test_check_mode_and_removal_do_not_leave_a_retired_publication(self):
        self.save()
        ensure_catalog(self.root)
        ensure_catalog(self.root, check=True)
        generated = self.root / 'publication/generated/first.ptx'
        generated.write_text('stale', encoding='utf-8')
        with self.assertRaisesRegex(ValueError, 'stale'):
            ensure_catalog(self.root, check=True)
        ensure_catalog(self.root)
        self.data['notes'] = []
        self.save()
        ensure_catalog(self.root)
        self.assertFalse(generated.exists())
        ensure_catalog(self.root, check=True)
        self.assertEqual(etree.parse(str(self.root / 'source/generated/notes-list.ptx')).getroot().tag, 'p')


class ExistingNoteMigration(unittest.TestCase):
    def test_original_note_entry_urls_and_listing_are_preserved(self):
        catalog = load_catalog()
        notes = {n['slug']: n for n in catalog['notes']}
        slugs = ['fujita', 'nagata', 'cubic-fourfolds', 'category-theory', 'toric-geometry',
                 'hyperkahler', 'cubic-k3', 'homological-algebra', 'hyperkahler-syz',
                 'sheaves-topological', 'sheaves-sites', 'grothendieck-ring']
        for slug in slugs:
            document_id = ('cubic-fourfold' if slug == 'cubic-fourfolds' else slug) + '-notes'
            self.assertEqual(notes[slug]['entry'], f'notes/{slug}/{document_id}.html')
        files = render_catalog()
        listing = etree.fromstring(files['source/generated/notes-list.ptx'])
        self.assertEqual(listing.xpath('li/p/alert/url/@href'), [notes[s]['entry'] for s in
            ['category-theory', 'cubic-fourfolds', 'nagata', 'fujita']])
        self.assertEqual(etree.fromstring(files['source/generated/selected-notes-list.ptx']).tag, 'p')

    def test_numbering_and_reading_features_match_existing_notes(self):
        files = render_catalog()
        zero_start = {'category-theory', 'toric-geometry', 'hyperkahler',
                      'homological-algebra', 'sheaves-topological', 'sheaves-sites'}
        for slug in ['fujita', 'nagata', 'cubic-fourfolds', 'cubic-k3', 'hyperkahler-syz',
                     'grothendieck-ring', *sorted(zero_start)]:
            publication = etree.fromstring(files[f'publication/generated/{slug}.ptx'])
            self.assertEqual(publication.find('html/search').get('variant'), 'textbook')
            self.assertEqual(publication.find('html/knowl').get('proof'), 'yes')
            self.assertEqual(publication.find('html/cross-references').get('knowled'), 'maximum')
            self.assertEqual(publication.find('numbering/divisions').get('chapter-start'),
                             '0' if slug in zero_start else None)
            if slug == 'hyperkahler-syz':
                self.assertEqual(publication.find('common/chunking').get('level'), '2')
                self.assertEqual(publication.find('numbering/divisions').get('part-structure'), 'decorative')
                self.assertEqual(publication.find('numbering/blocks').get('level'), '2')
            else:
                self.assertEqual(publication.find('common/chunking').get('level'), '1')
                self.assertEqual(publication.find('numbering/blocks').get('level'), '1')
            footnotes = publication.find('numbering/footnotes')
            expected_footnotes = ('1' if slug in zero_start else
                                  '2' if slug in {'hyperkahler-syz', 'grothendieck-ring'} else None)
            self.assertEqual(footnotes.get('level') if footnotes is not None else None, expected_footnotes)


if __name__ == '__main__':
    unittest.main()
