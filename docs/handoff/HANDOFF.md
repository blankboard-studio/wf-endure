# Endure — design handoff → Webflow build

The brief every build session starts from. Written when the design is
approved (by the designer, or at the end of the prototype phase) and kept
current during the build. Agents read it after `AGENTS.md` and `GOTCHAS.md`.

## Read first

1. `AGENTS.md`, `GOTCHAS.md`, and the skill's `conventions.md`.
2. This file, then `MANUAL-TODO.md` and `BUILD-NOTES.md` in this folder;
   after the build handoff, `REVIEW.md` (feedback rounds until launch) and
   `SEO-PLAN.md`.
3. The approved design: `../prototype/` (http://127.0.0.1:5217), built from
   the Figma file Blankboard Case Study (`mrCaDZMCqer4DkFnaO7Mom`), page
   "Endure Website": Home, Contact, Project (CMS template), Insights, all at 1440.

## Status

2026-11-22 — Repo set up. Inputs drafted below (Pages, CMS, Components,
Videos) and in `SEO-PLAN.md` › Inventory, **waiting for Asheem's approval**.
No prototype page built yet. Webflow starter site: being set up in a
separate session.

## Ground rules for this project

- <Who gives the go-ahead for Webflow writes, and how.>
- <Anything that differs from conventions.md, agreed with the designer.>
- <Which repo or folders are read-only, if any.>

## Pages

| URL | Design source | Webflow page | Notes |
| --- | --- | --- | --- |
| `/` | Figma › Endure Website › Home | Home | |
| `/contact` | Figma › Contact | Contact | nav, contact section and footer from Home |
| `/insights` | Figma › Insights (list) | Insights | keep out of the nav until there are real posts |
| `/insights/<slug>` | not designed yet | Insights template | CMS template; design needed |
| `/project/<slug>` | Figma › Project / Aliv (CMS template) | Projects template | 7 items, slugs as on the live site |
| `/design/style-guide` | | Style guide (folder `design`) | first page built; excluded from search |
| `/design/media` | | Media (folder `design`) | needed: the site plays video |
| `/404` | not designed yet | 404 | utility page |

Live slugs to keep: `aliv`, `origin`, `promo`, `ukwati`, `wga`, `wild`,
`warrior-fund` (all under `/project/`).

Breakpoints: 991 (tablet), 767 (mobile landscape), 479 (mobile). Only the
desktop frames exist in Figma (1440); phone and tablet frames are an open
decision below.

## Variables and classes

- Variable changes, as old → new, grouped for approval: <file or list>.
- New classes, with what each is for: <CLASSES.md or list>.
- Approval state: <approved / pending, by whom, when>.

## CMS

Draft from the live site's pages, for approval. Field names are proposals.

| Collection | Fields | Used on |
| --- | --- | --- |
| Projects | Name (plain), Slug, Number (number, shown as 001…), Website label (plain, `alivworldwide.com`), Website URL (link), Deliverable (plain, `Website`), Date (date), Services (plain, `Brand strategy, art direction, social media`), Sector (plain, `Powersports`), Cover image (image, 2000×800), Cover small (image, reel strip), Logo (image, SVG, reel hover), Headline (plain, the page's second heading), Situation (plain, multi-line), Mission (plain, multi-line), Tools (multi-reference → Tools), Gallery (multi-image), Film 1 URL / Film 1 poster, Film 2 URL / Film 2 poster (link + image), Result 1–4 title (plain) and Result 1–4 text (plain), Card client line (plain), Card service line (plain), Slogan line 1–3 (plain ×3), Card tagline (plain, `Future ready solutions`), Card description (plain), Card result (plain), Card category (plain, `Software`), Show in hero strip (switch), Meta title (plain), Meta description (plain) | Project template; Home hero strip (Reel cards, switch on), Home work grid (Work cards, sort by Number descending), "More work" on the template (3 items, exclude current) |
| Tools | Name (plain), Slug | Project › The tools; tags on cards |
| FAQs | Question (plain), Answer headline (plain), Answer detail (plain, multi-line), Order (number) | FAQ on the Project template (all items, sort by Order) |
| Clients | Name (plain), Logo (image, optional), Show as logo (switch), Order (number) | Home client wall (34 items: 27 names, 7 logos) |
| Insights | Title (plain), Slug, Category (reference → Insight categories), Cover image (image), Summary (plain), Body (rich text), Date (date), Meta title, Meta description | Insights list (sort by Date descending), Insights template |
| Insight categories | Name (plain), Slug | Insights filter: When words fail, After rebrand, What went wrong, Defend the spend, Reclaim relevance, Stalled growth |

Not CMS (static, edited on the page): leadership names, offices, contact
details, social links.

## Components to make

Draft. Generic = a Webflow component with props. Page-specific = classes only.

| Component | Used on | Props | Behaviour inside |
| --- | --- | --- | --- |
| Nav | every page | — | Play reel opens the reel overlay; Menu opens the menu |
| Footer | every page | — | — |
| Contact section | Home, Contact, Insights | — | form |
| Button | contact form, footer card | Label, Link, Variant (dark on orange / light on image) | arrow hover |
| Section label | every section intro row | Label, Number | — |
| Tag | project tools, card tags, insights filter, article cards | Label, Variant (paper / outline / active) | — |
| Reel card | Home hero strip | Still, Logo, Link | hover: logo on paper |
| Film card + Play button | Home | Poster, Video | hover: star turns orange with a half turn and zoom (decided) |
| Work card | Home work grid | Still, Name, Client line, Service line, Number, Slogan 1–3, Link | hover: dim and blur, marquee name, details |
| Project card | "More work" on the template | Still, Name, Category, Line, Link | — |
| Article card | Insights list | Cover, Category, Date, Title, Summary, Link | — |
| FAQ item | Project template | Question, Answer headline, Answer detail | accordion, one open |
| How we work funnel | Home | page-specific | contour animation, stage hover (decided: Contours, funnel left, text right) |
| Client wall | Home | page-specific | names build in on scroll |
| Project hero, intro, gallery, results | Project template | page-specific | gallery thumbnails switch the main image |

## Modules

| Module | `data-*` hooks | What it does |
| --- | --- | --- |
| <name> | `data-…` | |

## Videos

Every video on the live site, for the media page. Endure supplies the
files; the current ones are on Webflow's asset host and Endure's Vimeo.

| Video | Page | Plays | Now | Needed |
| --- | --- | --- | --- | --- |
| Preloader | Home (first visit) | autoplay, muted, once | Webflow asset, `.webm` | keep or drop (open decision) |
| Helmet film | Home, film card | autoplay, muted, loop | Webflow asset, 1000×416, 1.9 s | a sharper source from Endure |
| Reel | every page, "(Play reel)" and the play button | on click, with sound | Endure's Vimeo | the reel file or Vimeo ID |
| Work card previews | Home work grid | on hover, muted, loop | Endure's Vimeo (progressive links) | one short loop per project |
| Project gallery films | Project template, 1–2 per project (Aliv, Promo, Ukwati, WGA, Warrior Fund) | autoplay, muted, loop | Endure's Vimeo progressive links with signatures | stable files or Vimeo IDs; signed links can expire |

## Decisions

- 2026-11-22 · Play button: hover turns the star orange with a half turn and a zoom (`Redesign/motion/play-button.html`, option A).
- 2026-11-22 · How we work: Contours diagram, outline kept, funnel left and question and tools right in one row per stage.
- 2026-11-22 · Clients section stays as on the live site.

- <Date> · <decision and why.>

## Open decisions

| Item | Now | Options |
| --- | --- | --- |
| Design frame width | Figma frames are 1440 | keep 1440 as the design frame, scaling 1440–1680 (recommended) · or the template default 1680 |
| Phone and tablet designs | desktop only | design them in Figma first (the template expects a frame per breakpoint) · or build them in the prototype and review there |
| States per control | not specified | hover, focus, pressed, disabled, error, empty, open for: buttons, tags, links, form fields, FAQ, cards, nav menu |
| Insights article page | not designed | design in Figma · or build from the list card styles |
| Preloader video | live site has one | keep · drop for speed |
| Insights in the nav | live site shows it with no posts | hide until there are posts (recommended) |

## Stand-in assets and placeholders

- <Images, copy and `#` links still to replace, with an owner.>
