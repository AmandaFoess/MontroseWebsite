# Button & CTA Audit

## Navigation

| # | Button | Variant | Links To | Assessment |
|---|--------|---------|----------|------------|
| 1 | "Get Started" (desktop) | default (primary) | /contact | **Text is vague.** "Get Started" implies onboarding or a product — doesn't fit a land development firm. Consider "Contact Us" or "Request a Consultation" to match the professional tone. |
| 2 | "Get Started" (mobile) | default (primary, full-width) | /contact | **Same issue as #1.** Should match whatever the desktop CTA becomes. |
| 3 | Mobile menu toggle | ghost, icon | toggles menu | **Fine.** Standard hamburger/X pattern, no changes needed. |

## Home Page

| # | Button | Variant | Links To | Section | Assessment |
|---|--------|---------|----------|---------|------------|
| 4 | "Explore Our Work" | default (primary), lg | /services | Hero | **Destination mismatch.** Text says "Explore Our Work" but links to /services — sounds like it should go to a portfolio/projects page, which no longer exists. Consider "View Our Services" or "What We Do" to match the destination. |
| 5 | "Learn More" | default (primary), lg | /services | Scope of Work | **Redundant.** This section already previews services with descriptions, and the hero CTA also links to /services. Two buttons on the same page going to the same place. Consider removing this button or changing it to link to /about or /contact instead. |
| 6 | "Get In Touch" | outline, lg | /contact | Track Record | **Good.** Outline variant provides visual hierarchy — secondary to the primary CTAs above. Text and destination are appropriate. Keep as-is. |

## Services Page

| # | Button | Variant | Links To | Section | Assessment |
|---|--------|---------|----------|---------|------------|
| 7 | "Contact Us" | default (primary), lg | /contact | Bottom CTA | **Good.** Clear, direct, and appropriate for the services page. Only CTA on the page — no clutter. Keep as-is. |

## About Page

| # | Button | Variant | Links To | Section | Assessment |
|---|--------|---------|----------|---------|------------|
| — | (none) | — | — | — | **Missing a CTA entirely.** The About page has no call-to-action. After reading about the company, visitors have no clear next step. Add a CTA section at the bottom linking to /contact or /services. |

## Contact Page

| # | Button | Variant | Links To | Section | Assessment |
|---|--------|---------|----------|---------|------------|
| 8 | "Send Message" / "Sending..." | default (primary), lg | form submit | Contact Form | **Good.** Clear action text, proper loading state. Keep as-is. |

## Footer

| # | Element | Type | Links To | Assessment |
|---|---------|------|----------|------------|
| 9 | "Get in touch →" | text link (primary color) | /contact | **Good.** Subtle, doesn't compete with page CTAs. Keep as-is. |
| 10 | "Privacy Policy" | text link | /privacy | **Dead link.** No /privacy page exists — will hit 404. Either create the page or remove the link. |
| 11 | "Terms of Service" | text link | /terms | **Dead link.** No /terms page exists — will hit 404. Either create the page or remove the link. |

## 404 Page

| # | Button | Assessment |
|---|--------|------------|
| — | (none) | **Missing a way back.** The 404 page has no button to return home. Add a "Back to Home" button. Also the message "Did you forget to add the page to the router?" is developer-facing and should be changed to something user-friendly. |

---

## Summary of Recommended Changes

### Fix
- [ ] **#1-2** Change nav CTA "Get Started" → "Contact Us" or "Request a Consultation"
- [ ] **#4** Change hero CTA text to match /services destination ("View Our Services" or "What We Do")
- [ ] **#10-11** Remove or create pages for Privacy Policy and Terms of Service (currently dead links)
- [ ] **404 page** Fix developer message + add "Back to Home" button

### Remove
- [ ] **#5** Consider removing "Learn More" button from Scope of Work section (redundant with hero CTA — both go to /services)

### Add
- [ ] **About page** Add a CTA section at the bottom (e.g., "Ready to discuss your next project?" with a contact button)
