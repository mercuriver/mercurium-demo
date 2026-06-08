# Favicon / icon assets

Source of truth = the SVGs. The PNGs are derived raster artifacts checked in so
the deploy needs no image-build step.

| File                    | Role                                                                | Source               |
| ----------------------- | ------------------------------------------------------------------- | -------------------- |
| `favicon.svg`           | Primary browser-tab icon (rounded plate, transparent corners)       | hand-authored        |
| `favicon-32.png`        | PNG tab fallback for browsers without SVG favicon support           | `favicon.svg`        |
| `icon-fullbleed.svg`    | Full-bleed raster source for the masked PNGs (not linked from HTML) | hand-authored        |
| `apple-touch-icon.png`  | iOS home-screen icon, 180x180, full-bleed                           | `icon-fullbleed.svg` |
| `favicon-192.png`       | PWA manifest icon, 192x192                                          | `icon-fullbleed.svg` |
| `favicon-512.png`       | PWA manifest icon, 512x512                                          | `icon-fullbleed.svg` |
| `og-image.svg` / `.png` | Open Graph / Twitter card, 1200x630                                 | hand-authored        |
| `site.webmanifest`      | PWA manifest referencing the 192/512 icons                          | hand-authored        |

The "D" mark distills the wordmark logo (`assets/logo.svg`): a capital D whose
left spine carries the boar lower-tusk points that give the wordmark its
character. Gradient stops (cyan `#06b6d4` -> indigo `#6366f1` -> amber
`#f59e0b`) and the amber-tint plate `#fef3c7` are hardcoded — a favicon renders
in browser chrome where the app token custom-properties never cascade.

## Regenerating the PNGs

After editing any source SVG, re-rasterize with `@resvg/resvg-js` (headless,
no system deps). It resolves direct `fill="url(#...)"` gradients correctly,
unlike `qlmanage`/Quick Look which silently produces blank thumbnails.

```bash
npm i -D @resvg/resvg-js   # one-off, in a scratch dir is fine
node - <<'EOF'
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'fs';
const out = (src, size, dst) => {
  const r = new Resvg(readFileSync(src, 'utf8'),
    { fitTo: { mode: 'width', value: size }, font: { loadSystemFonts: true } });
  writeFileSync(dst, r.render().asPng());
};
out('icon-fullbleed.svg', 180, 'apple-touch-icon.png');
out('icon-fullbleed.svg', 192, 'favicon-192.png');
out('icon-fullbleed.svg', 512, 'favicon-512.png');
out('favicon.svg', 32, 'favicon-32.png');
out('og-image.svg', 1200, 'og-image.png');
EOF
```
