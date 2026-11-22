# SEO plan: metadata, Open Graph, canonical and schema

Written before launch (the `webflow-launch` skill › SEO plan) and kept
current until every row is done. The rule is the same as for CSS:
whatever Webflow does natively stays in Webflow (page settings, CMS
bindings); only what it can't do goes into custom code, and that code is
kept in this repo as the source of truth.

## Status

<Date> — <what is done, what is next, what waits on the client.>

## What staging outputs today

Read from the published HTML (`pnpm wf:seo`, or `curl` a page), not from
the page settings.

| Tag | Webflow does it? | Now |
| --- | --- | --- |
| `<title>`, meta description | Yes, page settings (templates: bound fields) | |
| `og:title`, `og:description`, `twitter:*` | Yes, page settings ("same as SEO") | |
| `og:image` | Yes, page settings (upload, or bind an image field on templates) | |
| `<link rel="canonical">` | Yes, once Site settings › SEO › Global canonical URL is set | Not on staging |
| `og:site_name`, `og:locale`, `twitter:site` | No: head code in `loader.html` | |
| JSON-LD schema | No: page settings › custom code, from `docs/seo/schema/` | |
| `lang` | Yes, from the primary locale | |
| `sitemap.xml`, `robots.txt` | Yes, Site settings › SEO (sitemap controls need a site plan) | |

## Inventory (draft, 2026-11-22)

Read from the live site (endurewithus.com) on 2026-11-22. The live site has
no `sitemap.xml`. Proposed text is a draft in Endure's own words, for
Asheem and then Endure to approve.

### Static pages

| Page | Title now (chars) | Title proposed (chars) | Description now (chars) | Description proposed (chars) | H1 now | H1 proposed |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Endure \| Brand Revival, Strategy & High-Stakes Creative (55) | Endure \| Brand Revival, Strategy & High-Stakes Creative (55) | Stop blending in. Endure helps visionary brands reposition with ruthless clarity and retool with high-stakes creative, campaigns, and films built to drive traction and multiply engagement. (188) | Endure helps visionary brands reposition with ruthless clarity and retool with high-stakes creative, campaigns and films that drive traction. (141) | none | the intro statement "Redesign a future where we reposition…" |
| `/contact` | Contact Endure \| Creative Firm in Denver & Chicago (50) | Contact Endure \| Creative Firm in Denver & Chicago (50) | Need clarity, traction, and creative that actually moves people? Endure serves Colorado and the Chicagoland area with brand strategy, campaigns, films, and sales assets built to perform. (186) | Need clarity, traction and creative that moves people? Endure works with brands in Colorado and Chicagoland on strategy, campaigns and films. (141) | none | "Endure with us" |
| `/insights` | Insights (8) | Insights \| Endure, Brand Strategy and Creative (46) | Your message is in. Endure helps brands reposition with clarity and retool with high-stakes creative. We’ll be in touch soon. (125) | Notes from Endure on positioning, rebrands and creative that has to perform: what worked, what went wrong and how to defend the spend. (134) | "Insights" | "Insights" (keep) |

### Project template

Bind the template's title and description to the Projects fields Meta
title and Meta description. Live pages have two H1s (the name and the
headline): keep the name as the H1 and make the headline an H2.

| Project | Title now (chars) | Description now (chars) | Proposed |
| --- | --- | --- | --- |
| `/project/aliv` | ALIV \| FROM CONCEPT TO $1M IN REVENUE IN THE FIRST 12 MONTHS (60) | Building a premium adventure brand designed to restore the spirit of adventure in UHNWI. (88) | sentence case in the Meta title field; description under 140: Endure to extend |
| `/project/origin` | ORIGIN \| AWARDED $1.8M IN PROPOSALS IN THE FIRST 8 MONTHS (57) | When you forgot who you are, we'll help you remember how to win. (64) | sentence case in the Meta title field; description under 140: Endure to extend |
| `/project/promo` | PROMO \| REPOSITIONED GEN-Z FUNDRAISING COMPANY DOUBLES REVENUE AND RETAINMENT (77) | Rebuilding a fundraising company into a Gen-Z leadership machine. (65) | sentence case in the Meta title field; title over 60: shorten; description under 140: Endure to extend |
| `/project/ukwati` | UKWATI \| MULTI-AWARD WINNING FILM AWARENESS CAMPAIGN (52) | Moving to end underaged marriage worldwide. (43) | sentence case in the Meta title field; description under 140: Endure to extend |
| `/project/wga` | WGA \| MORE MEETINGS BOOKED & RENEWED ENGAGEMENT ACROSS THE BOARD (64) | Reaching a new generation without losing a brand's original heart. (66) | sentence case in the Meta title field; title over 60: shorten; description under 140: Endure to extend |
| `/project/wild` | WILD GYM \| NOMINATIONS, AWARDS, AND SO MUCH MORE (48) | Repositioned a performance-driven brand built to turn riders into overperformers. (81) | sentence case in the Meta title field; description under 140: Endure to extend |
| `/project/warrior-fund` | WARRIOR FUND \| FILM GENERATED $5.09M IN FUNDRAISING (51) | Endure helped Wheaton Academy increase annual giving by 150% in the first year. (79) | sentence case in the Meta title field; description under 140: Endure to extend |

### Other findings

- Every static page shares one Open Graph image (`Open Graph.jpg`); project
  pages use their cover. Keep: bind the template's OG image to Cover image.
- No page sets `noindex`. The staging site must be noindex until launch.
- Google Tag Manager (`GTM-KWS4VHFG`) runs on every page: confirm with
  Endure whether it moves to the new site.

## Steps

1. **Inventory** (read-only): every static page and template with its
   title (length), description (length), OG fields, noindex, and what is
   missing. Include utility pages (404, legal, style guide, media).
2. **Titles and descriptions** (Webflow, API): draft the missing or weak
   ones within 50–60 / 140–160 characters → the client approves → write
   them. Templates bind a field (Meta Title, Meta Description), never a
   long body field.
3. **Open Graph** (Webflow): "same as SEO" on every page; a default
   1200×630 share image for static pages; template images bound to an
   image field.
4. **Canonical** (Webflow, at launch): Site settings › SEO › Global
   canonical URL = the production domain. Not on staging: a canonical to a
   domain the site isn't served from yet is wrong.
5. **Site-wide head tags** Webflow doesn't write (`og:site_name`,
   `og:locale`, `twitter:site` when there is a handle): added to the head
   snippet in `loader.html`, then re-pasted and published (snippets are
   not versioned).
6. **Schema** (JSON-LD): one file per page in `docs/seo/schema/`
   (`home.jsonld`, `about.jsonld`…), and `templates.md` for CMS templates
   with every `{Field}` the Designer inserts with "+ Add field". The file
   is the source of truth; the page's head code is a copy. Table below.
7. **Verify:** `pnpm wf:seo` on staging (every page in the sitemap), then
   Google's Rich Results Test on one page of each type. At launch,
   `pnpm wf:seo --live --canonical`.

## Schema per page

| Page(s) | Types | Key data |
| --- | --- | --- |
| Home | `Organization` (or `LocalBusiness` / `ProfessionalService` with an address), `WebSite` | name, logo, url, address, phone, email, hours, sameAs (socials) |
| About | `AboutPage`, referring to the Organization `@id` | |
| Contact | `ContactPage` + `ContactPoint` | phone, email, hours |
| <Collection> template | <`Service`, `BlogPosting`, `Article`, `Place`…>, `BreadcrumbList` | <fields bound> |
| Listing pages | `CollectionPage`, `BreadcrumbList` | |
| Legal, 404 | none (`seo.noSchemaOk` in the config) | |

Rules that cost time before:
- Every item points at the one Organization by `@id`
  (`https://<domain>/#organization`), written out with the production
  domain from the start.
- Webflow inserts CMS values into custom code raw: a line break or `"` in
  a bound field breaks the JSON, and an apostrophe comes out as `&#39;`
  (`wf:seo` fails on both). Bind single-line fields only, and check every
  CMS page after a schema change, not a sample.
- No `Review` or `AggregateRating` about the business itself (not
  eligible); `FAQPage` only where the content really is a FAQ.

## Needed from the client

- [ ] The official name, address, phone, email and hours for the schema.
- [ ] Social profile URLs (`sameAs`) and the X handle, if any.
- [ ] The production domain, www or apex, for canonicals.
- [ ] Approval of the default share image and the drafted meta copy.
