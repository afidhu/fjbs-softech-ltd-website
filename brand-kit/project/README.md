FJB's Softtech Limited makes tech solutions. This kit shows how our brand should look and sound. Please follow it so all our work looks the same.

## What we do

- Web development
- Mobile development
- AI automations

## Contact

- Phone: +255 717 313 797
- Email: frank.mhando@gmail.com or afidhumatata81@gmail.com
- Location: Survey, Dar es Salaam
- Map: https://share.google/ixl67gfYgPUl0TcWl

## Our name

- First time, write **FJB's Softtech Limited**.
- After that, write **FJB's Softtech** or "we".
- Do not write FJBS or Softech.

## How we talk

Use short, clear words. Talk to the client as "you".

| Write this | Not this |
| --- | --- |
| We keep your systems running. | We leverage IT paradigms. |
| We reply in one working day. | World-class support. |
| Your server is down. We are fixing it. | Oops! Something went wrong! |

- Start buttons with a doing word: "Book a call".
- Only use numbers that are true.
- No emoji in company papers.

## Colours

| Colour | HEX | CMYK | Use it for |
| --- | --- | --- | --- |
| Blue, `fjb-blue` | #0060BE | 100, 49, 0, 25 | Main colour |
| Orange, `fjb-orange` | #FF9700 | 0, 41, 100, 0 | Small highlights |
| Sky, `sky` | #4DB2FF | 70, 30, 0, 0 | Blue on dark |
| Midnight, `midnight` | #101A2E | 65, 43, 0, 82 | Dark backgrounds |

- Use mostly white, then blue. Use only a little orange.
- White text goes on blue.
- Dark text goes on orange.
- Do not put small orange text on white. Use `accent-text` for that.

Ask your printer for a test print first.

## Fonts

- Headings: Sora, with `h1`, `h2` and `h3`.
- Normal text: Figtree, with `body`.
- Code and numbers: JetBrains Mono, with `code`.
- No fonts on your computer? Use Arial.

## Logo

- Always use the files in Logos. Do not redraw the logo.
- Pick the right logo for the background. See `LogoGrounds`.
- Give the logo space. Do not make it too small. See `LogoClearSpace`.
- Do not change the logo. See `LogoMisuse`.

## Pictures

- Use real photos of real work.
- Ask people before you take their photo.
- Do not use fake stock photos.

## Icons

Use the icons in Icons. Do not mix in other styles.

## Ready to use

- `BusinessCard`
- `Letterhead`
- `EmailSignature`
- `SocialPost`

Change the sample name and job title before you print.


---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

13 components are documented without a runnable `components/bundle.js`: read each component’s card, and its README where it has one (`components/<Comp>/README.md`), and build to those guidelines. Tokens: the values are on `api/tokens.md`; a Slides deck or Design canvas also takes `tokens.json` by file path. On a Design canvas, also copy `tokens.css` to `project/ds/<folder>/tokens.css` in the call that installs this system, and link it in each artboard that uses this system, right after the `support.js` line and before the system’s other stylesheets: `<link rel="stylesheet" href="ds/<folder>/tokens.css">` (with one `../` in front for each folder the artboard is in).

Fonts: `tokens.css` loads each font from its file, by path.

- **Design canvas:** copy `fonts/Sora-Variable.woff2`, `fonts/Figtree-Variable.woff2` and `fonts/JetBrainsMono-Variable.woff2` to the same paths under the canvas’s `project/ds/<folder>/` (`<folder>` is the folder you install this system under; `fonts/Sora-Variable.woff2` lands on `project/ds/<folder>/fonts/Sora-Variable.woff2`), in the same call that installs this system; the copy of `tokens.css` that each artboard links loads them from there. If the install’s reply leaves a font out, bring that font in as for any other page.
- **Slides deck:** for each family you use in the deck (`faces` holds at most the number of typefaces Slides’ `deck-files.md` gives), install its file with the system and name the path it lands on as that family’s `src` in `project/deck.json` `faces`, under the key in the Slides column. A deck takes a font as a file only under the rule in Slides’ `fonts.md` (no space or leading underscore in its path, for two): any other font, or one kept by id, is uploaded as `fonts.md` says.
- **Any other page:** one file per family is enough (below: the upright face nearest regular weight; bold and italic synthesize). Fetch it as the fetch column says (Artifact tool `read`, that id or path as `path`), upload it as an asset (`publish`, `file_path`, `asset:true`) and declare it with an `@font-face { font-family: "<family>"; src: url(<uploaded>) }` rule.

| family | file | fetch | CSS | Slides `faces` key |
| --- | --- | --- | --- | --- |
| Sora | `fonts/Sora-Variable.woff2` (weight 100 800) | `read` the file with `project/` in front | `var(--font-display)` | `sora` |
| Figtree | `fonts/Figtree-Variable.woff2` (weight 300 900) | `read` the file with `project/` in front | `var(--font-sans)` | `figtree` |
| JetBrains Mono | `fonts/JetBrainsMono-Variable.woff2` (weight 100 800) | `read` the file with `project/` in front | `var(--font-mono)` | `jetbrains-mono` |

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`; stored assets and their paths: `api/assets/<Group>.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json` and `design-system.json` are sources for tools: hand them over. `components/<Comp>/README.md` and `assets/<Group>/README.md` are the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, fill, border, palette, type, spacing, radius, shadow. (13.5k)

**Icons and assets**

- `api/assets/Logos.md` — 30 files, by asset id. (3.9k)
- `api/assets/Avatars.md` — 7 files, by asset id. (1.6k)
- `api/assets/Mockups.md` — 2 files, by asset id. (1.1k)
- `api/assets/Icons.md` — 18 files, by asset id. (2.2k)

**Components** (`api/components/<Comp>.md`, 13)

- **Applications**: `BusinessCard` — The standard company card, 85 by 55mm with 3mm bleed · `EmailSignature` — The signature for all company email · `Letterhead` — The first page of company letters, A4 with 20mm margins · `SocialPost` — Square posts and profile images for social channels
- **Actions**: `Button` — Starts an action
- **Forms**: `Input` — A labelled single-line text field
- **Logo**: `LogoClearSpace` — Shows the space every logo needs around it and the smallest size each version can run at · `LogoGrounds` — Pick the logo file by the background it sits on · `LogoMisuse` — The six ways the logo must never be changed
- **Navigation**: `NavBar` — The top bar of every website and web app
- **Content**: `ServiceCard` — Presents one service in a grid
- **Status**: `StatusPill` — Shows the state of a system, ticket or project
- **Brand graphics**: `Supergraphic` — The brand's one graphic device: the globe mark scaled to 150% or more of its container and bled off the top right
