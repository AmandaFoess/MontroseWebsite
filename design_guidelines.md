# Design Guidelines: Montrose LLC Professional Land Development Website

## Design Approach

**Selected Framework**: Design System Hybrid (Material Design principles + Professional Services aesthetic)

**Key References**: Linear's clean typography and spacing, Stripe's professional layouts, modern real estate platforms

**Design Principles**:
- Establish immediate trust through professional polish and clarity
- Communicate expertise via structured information hierarchy
- Balance authority with approachability
- Create visual rhythm that guides users through complex service offerings

---

## Typography System

**Font Stack**: Google Fonts via CDN
- Primary: Inter (headlines, UI elements) - weights 400, 600, 700
- Secondary: Source Serif Pro (body text, descriptions) - weights 400, 600

**Type Scale**:
- H1: text-5xl md:text-6xl, font-bold, tracking-tight
- H2: text-3xl md:text-4xl, font-semibold
- H3: text-xl md:text-2xl, font-medium
- H4: text-lg md:text-xl, font-medium
- Body: text-base md:text-lg, leading-relaxed
- Small: text-sm, leading-normal

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Element margins: mb-4, mb-8, mb-12
- Grid gaps: gap-8 md:gap-12

**Container Strategy**:
- Max-width: max-w-7xl mx-auto px-4 md:px-8
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl

**Grid Patterns**:
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Project cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Value cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Two-column splits: grid-cols-1 lg:grid-cols-2

---

## Component Library

**Navigation**:
- Fixed header with logo left, navigation center, CTA button right
- Mobile: Hamburger menu with full-screen overlay
- Height: h-20, backdrop-blur effect

**Hero Sections**:
- Landing: Full-width hero image (professional aerial shot of developed land/community) with overlay gradient, h-[600px] md:h-[700px]
- Secondary pages: Shorter hero h-[400px] with subtle background pattern or texture
- Buttons on hero: Backdrop blur (backdrop-blur-sm bg-white/10) with border

**Cards**:
- Service Cards: Vertical layout with icon top, title, description, subtle border, hover lift effect (hover:shadow-lg transition)
- Project Cards: Image top (aspect-ratio-16/9), content section with title, location, status badge, description
- Value Cards: Icon, title, description, minimal border

**Buttons**:
- Primary CTA: px-8 py-3, text-base font-semibold, rounded-lg
- Secondary: px-6 py-2.5, outlined variant
- Icon buttons: w-12 h-12 for navigation

**Forms**:
- Input fields: h-12, border, rounded-lg, px-4
- Textarea: h-32, same styling
- Labels: text-sm font-medium, mb-2
- Form layout: Two-column on desktop for name/company, email/phone

**Footer**:
- Multi-column layout: Company info, Quick Links, Services, Contact
- Newsletter signup section
- Social links (LinkedIn focus for B2B)
- Copyright and legal links

---

## Images Strategy

**Required Images**:
1. **Landing Hero**: Professional aerial photograph of a completed development project showing roads, infrastructure, and community layout (1920x1080 min)
2. **Project Cards**: Each project needs a hero image - aerial or street-level shots of developments (800x600)
3. **About Page Hero**: Team collaboration image or site planning meeting (1920x700)
4. **Services Page**: Consider background pattern or subtle texture instead of photo

**Image Treatment**:
- Hero overlays: Linear gradient overlay for text readability
- Project images: Subtle hover zoom effect (hover:scale-105)
- Aspect ratios: 16:9 for project cards, maintain consistency

---

## Icon System

**Library**: Heroicons via CDN (outline and solid variants)

**Usage**:
- Service cards: Large icons (w-12 h-12), outline style
- Navigation: Small icons (w-5 h-5)
- Value cards: Medium icons (w-10 h-10)
- Form fields: Small inline icons (w-4 h-4)

---

## Page-Specific Layouts

**Landing Page** (7 sections):
1. Hero with image, headline, subhead, CTA
2. Services overview grid (3-column)
3. Featured projects showcase (3-column cards)
4. Stats/metrics bar (4-column: years established, projects completed, etc.)
5. Values preview (2-3 key values)
6. Testimonial/client logos section
7. Contact CTA section

**Services Page**:
- Hero section
- Full service cards grid with icons and detailed descriptions
- Process timeline visualization
- Bottom CTA

**About Page**:
- Hero with team/collaboration image
- Mission statement (centered, max-w-3xl)
- Who We Are (two-column: text + image/timeline)
- Values grid (6 cards, 3-column)
- Team section if applicable

**Projects Page**:
- Filter tabs (All, Completed, Under Construction, Planned)
- Project grid with status badges
- Load more pagination

**Contact Page**:
- Two-column: Form left (2/3 width), Contact info right (1/3 width)
- Map integration placeholder
- Office hours and response time info

---

## Accessibility & Polish

- Maintain WCAG AA contrast standards
- Focus states: ring-2 ring-offset-2 on interactive elements
- Semantic HTML throughout
- Smooth transitions: transition-all duration-300
- Responsive images with loading="lazy"