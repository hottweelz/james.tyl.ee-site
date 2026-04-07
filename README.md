# james.tyl.ee — Personal Brand Site

Public source repository for [james.tyl.ee](https://james.tyl.ee), the personal brand site of **James Tylee** — fintech strategist, blockchain expert, author, and podcast host.

## Entity

**James Tylee** is a Wall Street veteran with 30+ years of experience across the US Treasury's Internal Revenue Service, Bloomberg, Merrill Lynch, and Bank of America. He holds dual certifications as a Certified Bitcoin Professional (CBP) and Certified Ethereum Professional (CEP) through the C4 Consortium. He is the author of *The Digital Assets Revolution: A First-Person Journey Through the Future of Money*, co-host of the Digital Bytes Podcast (70+ episodes), and a contributor to Digital Bytes Substack (200+ articles). He is the founder of Tylee Smart Markets and a vocal advocate for disability inclusion in tech and finance leadership.

## Site Structure

| File | Purpose |
|---|---|
| `index.html` | Homepage — biography, credentials, FAQ, and contact |
| `about.md` | Canonical versioned brand document (machine-readable) |
| `writing.md` | Writing & publications companion file |
| `book.md` | Book page companion file |
| `product.md` | Advisory services companion file |
| `llms.txt` | AI agent discovery file — structured site summary for LLM retrieval |
| `robots.txt` | Crawler directives including explicit AI bot allow rules |
| `sitemap.xml` | XML sitemap for search engine and AI crawler discovery |
| `book.html` | Book landing page |
| `writing.html` | Writing & publications page |
| `privacy-policy.html` | GDPR-compliant privacy policy |
| `terms-of-service.html` | Terms of service |

## Key Profiles & Platforms

- **Website:** https://james.tyl.ee
- **LinkedIn:** https://www.linkedin.com/in/jtylee
- **Amazon Author:** https://www.amazon.com/stores/author/B08LXRDL8N
- **Substack:** https://digitalbytes.substack.com
- **Podcast (Spotify):** https://open.spotify.com/show/0wxqlnCDOlk5NXiEtaJYKr
- **Linktree:** https://linktr.ee/james.tylee
- **Tylee Smart Markets:** https://tsm.tyl.ee

## Credentials

| Credential | Issuing Body | Verification |
|---|---|---|
| Certified Bitcoin Professional (CBP) | C4 Consortium | https://cryptoconsortium.org/lookup?token=2a9e19&certification_code=CBP |
| Certified Ethereum Professional (CEP) | C4 Consortium | https://cryptoconsortium.org/lookup?token=eff754&certification_code=CEP |

## AI Retrieval

This site is engineered for agent and LLM retrieval. Key signals:

- `llms.txt` at root with H1, blockquote summary, and structured page/content links
- Companion `.md` files for all major sections with consistent frontmatter
- Person JSON-LD in `<head>` with `sameAs`, `knowsAbout`, and `hasCredential`
- FAQPage JSON-LD with 4 Q&A pairs
- Body FAQ block using `<details>`/`<summary>` elements
- All major AI crawlers explicitly allowed in `robots.txt`

## Contact

- james@tyl.ee
- github.com/hottweelz
