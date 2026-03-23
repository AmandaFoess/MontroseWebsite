# Montrose SEO Plan & Implementation

## Target Keywords
- "land development charlotte nc"
- "montrose development"
- "land development huntersville nc"
- "real estate development charlotte"
- "site development charlotte nc"
- "land acquisition charlotte nc"

## What's Implemented

### Per-Page Meta Tags (react-helmet-async)
Each page has unique title, description, canonical URL, Open Graph, and Twitter Card tags via the `SEOHead` component.

| Page | Title | Description |
|------|-------|-------------|
| Home (`/`) | Montrose \| Land Development & Real Estate Solutions \| Charlotte, NC | Montrose is a full-cycle land development firm in Huntersville, NC serving the Charlotte area. From land acquisition to construction closeout, we deliver high-performing real estate development projects. |
| Services (`/services`) | Land Development Services \| Site Development Charlotte NC \| Montrose | Comprehensive land development services in Charlotte, NC including land acquisition, site evaluation, rezoning, design & permitting, pre-construction, and site construction. Serving Huntersville and the greater Charlotte area. |
| About (`/about`) | About Montrose \| Land Development Company \| Huntersville, NC | Founded in 2013, Montrose is a trusted land development company in Huntersville, NC. We partner with clients to deliver innovative, data-driven real estate development solutions across the Charlotte region. |
| Contact (`/contact`) | Contact Montrose \| Land Development Charlotte NC | Contact Montrose for land development and real estate development services in Charlotte, NC. Office located in Huntersville, NC. Call (980) 828-6096 or email info@themontroseteam.com. |

### Structured Data (JSON-LD)
`StructuredData` component in `App.tsx` injects LocalBusiness schema on every page:
- Business name, description, founding date
- Full address (15905 Brookway Dr Suite 4202, Huntersville, NC 28078)
- Phone, email, website URL
- Geo coordinates
- Areas served (Charlotte, Huntersville)
- Service types
- LinkedIn profile
- Business hours

### Static Files
- `client/public/robots.txt` — Allows all crawlers, references sitemap
- `client/public/sitemap.xml` — Lists all 4 pages with priority levels
- `vercel.json` — Rewrite exclusions so robots.txt and sitemap.xml are served as static files

### HTML & Meta Improvements
- Fallback meta tags in `index.html` (title, description, OG, Twitter)
- Canonical URLs on every page
- Geo meta tags (`geo.region`, `geo.placename`)
- Descriptive hero image alt text
- Trimmed Google Fonts from ~25 families to 2 (Inter + Source Serif 4)
- Proper `h1` > `h2` heading hierarchy on all pages

## Still Needed (Manual Steps)

### 1. Open Graph Image
Create a 1200x630px image at `client/public/og-image.jpg`. Should include:
- Montrose logo
- Tagline or key value prop
- Professional background (aerial development photo or brand colors)

This image appears when the site is shared on LinkedIn, Facebook, Slack, etc.

### 2. Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://themontroseteam.com`
3. Verify ownership (DNS TXT record or HTML meta tag)
4. Submit sitemap: `https://themontroseteam.com/sitemap.xml`
5. Request indexing for each page

### 3. Google Business Profile
1. Claim or create a Google Business Profile at https://business.google.com
2. Set category to "Land Development" or "Real Estate Developer"
3. Add address, phone, website, business hours
4. Add photos of completed projects
5. This is critical for local search ("land development near me")

### 4. Apple Touch Icon
Create a 180x180px icon and save as `client/public/apple-touch-icon.png`. Add to `index.html`:
```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

## Ongoing SEO Activities

### Content
- Add a blog/insights page with articles about land development in Charlotte
- Add case studies / project portfolio with location-specific content
- Keep service descriptions detailed and keyword-rich

### Backlinks
- Ensure LinkedIn company page links to the website
- Get listed in local Charlotte business directories
- Industry associations (ULI, NAIOP, Charlotte Regional Business Alliance)

### Monitoring
- Google Search Console: Monitor impressions, clicks, and indexing status
- Check ranking for target keywords monthly
- Monitor Core Web Vitals (Lighthouse scores)

## File Reference
| File | Purpose |
|------|---------|
| `client/src/components/SEOHead.tsx` | Per-page meta tags |
| `client/src/components/StructuredData.tsx` | JSON-LD LocalBusiness schema |
| `client/public/robots.txt` | Crawler instructions |
| `client/public/sitemap.xml` | Page index for search engines |
| `client/index.html` | Fallback meta tags, fonts |
| `vercel.json` | Static file rewrite rules |
