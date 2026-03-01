# Assets

Put exported images from Figma in this folder.

Default placeholders are committed so the page works offline. You can replace them with PNG/JPG/SVG exports.

`index.html` uses `<picture>` tags: if a `.png` exists it will be used, otherwise it falls back to the committed `.svg` placeholder.

Current placeholders used by `index.html`:

- `hero-dashboard.svg`
- `journal-feature.svg`
- `journal-thumb-1.svg`
- `journal-thumb-2.svg`

Optional PNG exports you can add (same names, `.png`):

- `hero-dashboard.png`
- `journal-feature.png`
- `journal-thumb-1.png`
- `journal-thumb-2.png`
