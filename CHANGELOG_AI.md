# CHANGELOG_AI

### 2026-05-11 18:10 EDT — Codex

Task:
- Replace the hero signature SVG after "Hello, I'm" with `images/james_sig-3.png`.

Selected agent team:
- Frontend Engineer: the change is UI-facing and needs to preserve the hero layout and accessibility.
- Minimal Change Engineer: keep the diff to the smallest possible asset swap with no unrelated cleanup.

Changes made:
- Updated the hero signature `<img>` in `index.html` to point at `images/james_sig-3.png`.

Files touched:
- `index.html`
- `CHANGELOG_AI.md`

Commands/tests run:

```bash
date '+%Y-%m-%d %H:%M %Z'
find . -name 'james_sig-3.png' -o -name '*james_sig*'
git diff -- index.html CHANGELOG_AI.md
```

Results:
- Confirmed the PNG exists at `images/james_sig-3.png`.
- Confirmed the final diff is a single image source swap in the hero heading.

Decisions made:
- Kept the existing inline sizing styles and alt text unchanged so the new PNG inherits the current hero presentation.

Known issues:
- None identified for this change.

Next recommended steps:
- If you want, we can also update the Open Graph and Twitter preview image assets to use the new PNG variant for consistency.

Notes for next agent:
- The repo was missing `CHANGELOG_AI.md` at start of task; it has now been created and updated per repo rules.

### 2026-05-11 18:12 EDT — Codex

Task:
- Add the local AI/workspace clutter to `.gitignore`.

Selected agent team:
- Frontend Engineer: not needed for UI changes here, but the repo workflow still benefits from a minimal, repo-aware implementation.
- Minimal Change Engineer: keep the ignore update to the exact local files that were showing as untracked.

Changes made:
- Added `.ai/`, `.codex/`, `AGENTS.md`, and `images/james_sig-2.png` to `.gitignore`.

Files touched:
- `.gitignore`
- `CHANGELOG_AI.md`

Commands/tests run:

```bash
git status --short --branch
git diff -- .gitignore
date '+%Y-%m-%d %H:%M %Z'
```

Results:
- Confirmed the repository now only shows the `.gitignore` change in the working tree.
- Confirmed the new ignore rules are limited to the local AI/tooling artifacts that were showing up as untracked.

Decisions made:
- Left `CHANGELOG_AI.md` tracked because it is the repository handoff ledger and should not be ignored.

Known issues:
- None identified for this change.

Next recommended steps:
- If you want this pushed, I can commit and push the `.gitignore` update next.

Notes for next agent:
- The newly ignored files should stop appearing in `git status` once this change is committed.

### 2026-05-11 18:13 EDT — Codex

Task:
- Reduce the hero signature PNG to about one-third of its original size.

Selected agent team:
- Frontend Engineer: the change affects visual presentation and should remain responsive.
- Minimal Change Engineer: keep the adjustment to a single sizing declaration.

Changes made:
- Set the hero signature image width in `index.html` to `552px`, with `max-width: 100%` so it still scales down on smaller screens.

Files touched:
- `index.html`
- `CHANGELOG_AI.md`

Commands/tests run:

```bash
file images/james_sig-3.png
git diff -- index.html
date '+%Y-%m-%d %H:%M %Z'
```

Results:
- Confirmed `images/james_sig-3.png` is `1672 x 941`.
- Confirmed the visible hero image size now targets roughly 33% of that intrinsic width.

Decisions made:
- Used a fixed desktop width of `552px` instead of a layout refactor, because it matches the requested scale and keeps the diff minimal.

Known issues:
- None identified for this change.

Next recommended steps:
- If you want, I can push this sizing tweak as a follow-up commit.

Notes for next agent:
- The hero image is still responsive due to `max-width: 100%`; only the desktop target size changed.

### 2026-05-11 18:17 EDT — Codex

Task:
- Change the hero signature PNG width from `552px` to `475px`.

Selected agent team:
- Frontend Engineer: the change affects visual presentation in the hero area.
- Minimal Change Engineer: keep the update limited to the single width value requested.

Changes made:
- Updated the hero signature `<img>` in `index.html` to `width: 475px` while preserving `max-width: 100%`.

Files touched:
- `index.html`
- `CHANGELOG_AI.md`

Commands/tests run:

```bash
git diff -- index.html
date '+%Y-%m-%d %H:%M %Z'
```

Results:
- Confirmed the only markup change was the inline width adjustment from `552px` to `475px`.

Decisions made:
- Kept the responsive `max-width: 100%` behavior so the image still scales down on smaller screens.

Known issues:
- None identified for this change.

Next recommended steps:
- Commit and push this width adjustment.

Notes for next agent:
- This is a follow-up sizing tweak only; the asset and alt text remain unchanged.

### 2026-05-11 18:17 EDT — Codex

Task:
- Push the latest site changes: the `Tylee Smart Markets` href update and the updated `logos/tsm.webp` asset.

Selected agent team:
- Frontend Engineer: the change is a small site navigation and asset update.
- Minimal Change Engineer: keep the push limited to the tracked files that affect the page.

Changes made:
- Updated the `Tylee Smart Markets` link in `index.html` to `https://tyl.ee`.
- Kept the updated `logos/tsm.webp` binary in the commit.

Files touched:
- `index.html`
- `logos/tsm.webp`
- `CHANGELOG_AI.md`

Commands/tests run:

```bash
git status --short --branch
git diff --stat -- index.html logos/tsm.webp
git diff -- index.html
rg -n "tsm-logo_sm\\.png|tsm\\.webp|https://tyl.ee|https://tsm.tyl.ee" index.html logos -g '!node_modules'
```

Results:
- Confirmed the page link points to `https://tyl.ee`.
- Confirmed `logos/tsm.webp` is the only asset file involved in the site change.
- Confirmed `logos/tsm-logo_sm.png` is unreferenced and was left uncommitted.

Decisions made:
- Did not include `logos/tsm-logo_sm.png` because it is not referenced by the site and appears to be an extra local artifact.

Known issues:
- None identified for this change.

Next recommended steps:
- Commit and push the tracked changes.

Notes for next agent:
- If `logos/tsm-logo_sm.png` should be used later, wire it into the site explicitly before committing it.

### 2026-05-13 18:12 EDT — Codex

Task:
- Apply the latest LLM optimization feedback to improve crawler discovery, canonical URL consistency, and advisory-service structured data, then push the site updates to GitHub.

Selected agent team:
- LLM Optimization Agent: translated the scan into the highest-impact retrieval and training fixes.
- Frontend Engineer: updated HTML discovery paths, canonical links, and structured data safely.
- Minimal Change Engineer: kept the patch focused on visibility signals instead of broader content rewrites.

Changes made:
- Updated `sitemap.xml` to use canonical extensionless public URLs, added `/services`, and added the companion markdown files as first-class sitemap entries.
- Updated `llms.txt` to point at canonical extensionless pages and added the HTML advisory services page plus the terms page.
- Replaced internal `.html` navigation links in the edited pages with canonical extensionless routes to reduce redirect hops for crawlers.
- Repointed the homepage "Browse by Topic" CTA from the broken `/blog/` path to `/writing`.
- Added HTML discovery links for `about.md`, `writing.md`, `book.md`, and `product.md` in visible page footers and added `rel="alternate"` markdown links on `writing.html`, `book.html`, and `services.html`.
- Strengthened `services.html` structured data by switching from a generic `LocalBusiness` shape to a `ProfessionalService` with an `OfferCatalog` of advisory services.

Files touched:
- `404.html`
- `book.html`
- `index.html`
- `llms.txt`
- `privacy-policy.html`
- `services.html`
- `sitemap.xml`
- `terms-of-service.html`
- `writing.html`
- `CHANGELOG_AI.md`

Commands/tests run:

```bash
sed -n '1,220p' CHANGELOG_AI.md
sed -n '1,220p' .ai/rules/agent-team-selection.md
sed -n '1,260p' .ai/rules/ai-handoff.md
sed -n '1,260p' /Users/jamestylee/Downloads/agent-scan-2026-05-13-2.md
rg -n "about\\.md|writing\\.md|book\\.md|product\\.md|services|blog/|writing\\.html|book\\.html|privacy-policy\\.html|terms-of-service\\.html|rel=\\\"alternate\\\"|FAQPage|Person|Service" index.html services.html writing.html book.html privacy-policy.html terms-of-service.html 404.html
rg -n '/writing\\.html|/book\\.html|/services\\.html|/privacy-policy\\.html|/terms-of-service\\.html|https://james\\.tyl\\.ee/(writing|book|services|privacy-policy|terms-of-service)\\.html|/blog/' index.html writing.html book.html services.html privacy-policy.html terms-of-service.html 404.html llms.txt sitemap.xml || true
git diff --check
xmllint --html --noout index.html
xmllint --html --noout writing.html
xmllint --html --noout book.html
xmllint --html --noout services.html
xmllint --html --noout privacy-policy.html
xmllint --html --noout terms-of-service.html
xmllint --html --noout 404.html
git diff --stat -- index.html writing.html book.html services.html privacy-policy.html terms-of-service.html 404.html llms.txt sitemap.xml
git status --short --branch
git rev-parse --abbrev-ref HEAD
git remote -v
```

Results:
- Confirmed the edited HTML files are structurally valid with `xmllint`.
- Confirmed no edited file still references redirected `.html` routes or the broken `/blog/` path.
- Confirmed the sitemap now exposes the markdown companions directly and includes the services page.
- Confirmed the services page now advertises a clearer service-oriented schema payload for training crawlers.

Decisions made:
- Kept the fix limited to discovery, routing, and schema signals instead of rewriting page copy or restructuring page layouts.
- Added markdown links in visible HTML footers because the scan explicitly called out that llms-only discovery is too narrow for some crawlers.
- Left unrelated untracked local files (`GEMINI.md`, `logos/tsm-logo_sm.png`) out of scope for this commit.

Known issues:
- I have not rerun the external LLM scan yet, so the score improvement still needs live verification after deployment.
- Pages not touched in this pass may still contain legacy `.html` links if they were outside the scan-driven scope.

Next recommended steps:
- Commit and push these visibility updates, then rerun the external scan against production.
- If the next scan still reports service-page weakness, add a second `WebPage`/`mainEntity` JSON-LD graph on `services.html` for even more explicit parser compatibility.

Notes for next agent:
- Commit only the edited site files and `CHANGELOG_AI.md`; do not include unrelated untracked files in the repo root or `logos/`.
