# Kōwhai & Clay — Development Handoff

Build a premium editorial ceramics site in Next.js 14 + TypeScript + Tailwind. Static export. NZ English. Use plain `img` tags with the exact Unsplash URLs below.

## Repo Path
`/home/bob/workspace/kowhai-and-clay`

## Pages to Build
- `/` Home
- `/about/`
- `/collections/`
- `/workshops/`
- `/journal/`
- `/contact/`

## Tailwind Design Tokens
```ts
colors: {
  limestone: '#F3EEE6',
  clay: '#D8C2AE',
  kowhai: '#D7A91D',
  olive: '#6F715C',
  umber: '#8A5C43',
  iron: '#282421',
}
fontFamily: {
  heading: ['Cormorant Garamond', 'serif'],
  body: ['Manrope', 'sans-serif'],
  mono: ['IBM Plex Mono', 'monospace'],
}
boxShadow: {
  sm: '0 8px 24px rgba(40, 36, 33, 0.06)',
  md: '0 14px 40px rgba(40, 36, 33, 0.10)',
  lg: '0 24px 80px rgba(40, 36, 33, 0.12)',
}
borderRadius: {
  card: '24px',
  image: '20px',
  pill: '999px',
  field: '16px',
}
maxWidth: {
  content: '1280px',
  reading: '720px',
}
```

## Brand Copy Direction
- Calm
- Refined
- Grounded
- Editorial, not salesy
- Short paragraphs
- Avoid cliché artisan copy

## Header / Navigation
### Desktop
- Transparent over home hero
- Solid limestone on scroll and on inner pages
- Left: logo
- Right: nav links + primary CTA button
- CTA label: `Commission Enquiry`

### Mobile
- Top bar with logo and menu button
- Full-screen dropdown panel with large serif links
- CTA buttons stacked at bottom

## Component Breakdown

### 1. `SiteHeader`
**Props:**
- `transparent?: boolean`
- `ctaHref?: string`

Includes logo, nav links, commission CTA, mobile menu.

### 2. `LogoMark`
**Props:**
- `variant?: 'primary' | 'reversed' | 'mono'`
- `showWordmark?: boolean`
- `className?: string`

Use inline SVG from this doc.

### 3. `HeroSplitEditorial`
**Props:**
- `eyebrow`
- `title`
- `body`
- `primaryCta`
- `secondaryCta`
- `mainImage`
- `detailImage`
- `location`

### 4. `SectionIntro`
**Props:**
- `eyebrow`
- `title`
- `body`
- `align?: 'left' | 'center'`

### 5. `CollectionBentoGrid`
**Props:**
- `items: { title, text, image, href, size }[]`

### 6. `ImageTextBand`
**Props:**
- `title`
- `body`
- `image`
- `reverse?: boolean`
- `cta?`

### 7. `WorkshopBanner`
**Props:**
- `image`
- `title`
- `body`
- `cta`

### 8. `JournalCardGrid`
**Props:**
- `posts: { title, excerpt, image, date, slug }[]`

### 9. `NewsletterCard`
**Props:**
- `title`
- `body`
- `buttonLabel`

### 10. `ContactPanel`
**Props:**
- `studioDetails`
- `formFields`
- `faqItems`

### 11. `CenteredFooter`
**Props:**
- `navLinks`
- `contact`
- `social`

## Logo SVG
Paste as inline SVG component.

```svg
<svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M18 31C18 24.3726 23.3726 19 30 19C36.6274 19 42 24.3726 42 31" stroke="#8A5C43" stroke-width="3" stroke-linecap="round"/>
    <path d="M24 17C25.8 13.8 28.2 11.8 30 11C31.8 11.8 34.2 13.8 36 17" stroke="#D7A91D" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="18" r="2.5" fill="#D7A91D"/>
  </g>
  <text x="56" y="31" fill="#282421" font-family="Cormorant Garamond, serif" font-size="28" font-weight="600" letter-spacing="0.5">Kōwhai &amp; Clay</text>
</svg>
```

## Favicon SVG
Use this in `app/icon.svg`.

```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 42C18 34.268 24.268 28 32 28C39.732 28 46 34.268 46 42" stroke="#D7A91D" stroke-width="5" stroke-linecap="round"/>
  <path d="M26 24C28.2 20.2 30.4 18.2 32 17C33.6 18.2 35.8 20.2 38 24" stroke="#D7A91D" stroke-width="5" stroke-linecap="round"/>
  <circle cx="32" cy="26" r="3.5" fill="#D7A91D"/>
</svg>
```

## Page Layouts

### Home `/`
1. **Hero split editorial**
   - Eyebrow: `Handmade in Raglan, Aotearoa`
   - H1: `Ceramics shaped by coast, clay, and quiet ritual.`
   - Body: `Small-batch tableware and sculptural objects designed for thoughtful homes, slow tables, and gathered spaces.`
   - Primary CTA: `View Collections`
   - Secondary CTA: `Book a Workshop`
   - Main image: `https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&h=1500&fit=crop`
   - Detail image: `https://images.unsplash.com/photo-1517705008128-361805f42e86?w=700&h=900&fit=crop`
2. **Intro band**
   - Short founder note and stats: small-batch drops, handmade finishes, Raglan studio
3. **Featured collections bento**
   - Everyday Forms — `https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=900&h=1100&fit=crop`
   - Table Objects — `https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&h=700&fit=crop`
   - Seasonal Vessels — reuse hero detail crop styling if needed only visually, but keep actual section image list above for main assets
4. **Process band**
   - Image: `https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=900&fit=crop`
5. **Workshop banner**
   - Image: `https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1600&h=900&fit=crop`
6. **Journal cards**
   - `https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=1000&fit=crop`
   - `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=1000&fit=crop`
   - `https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=1000&fit=crop`
7. **Newsletter card**
8. **Footer**

### About `/about/`
1. Intro hero with founder story
   - Image: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&h=1200&fit=crop`
2. Story section narrow editorial text
3. Full-width studio image
   - `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&h=800&fit=crop`
4. Materials/detail image with values copy
   - `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&h=1100&fit=crop`
5. Quote block

### Collections `/collections/`
1. Hero banner
   - `https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1600&h=800&fit=crop`
2. Collection story cards grid
   - `https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=1100&fit=crop`
   - `https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=900&h=1100&fit=crop`
   - `https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900&h=1100&fit=crop`
   - `https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=1100&fit=crop`
3. Bespoke commissions CTA

### Workshops `/workshops/`
1. Hero
   - `https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&h=900&fit=crop`
2. Overview two-column section
3. Workshop format cards
4. Image pair gallery
   - `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&h=800&fit=crop`
   - `https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000&h=800&fit=crop`
5. Booking CTA panel

### Journal `/journal/`
1. Editorial intro
2. Featured post with image
   - `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop`
3. Additional post cards
   - `https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=1200&h=800&fit=crop`
   - `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop`

### Contact `/contact/`
1. Banner
   - `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&h=800&fit=crop`
2. Contact form + studio details
3. Supporting square image
   - `https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=900&fit=crop`
4. FAQ accordion

## Suggested Content
### Contact Details
- Studio: Raglan, Waikato, New Zealand
- Email: `hello@kowhaiandclay.co.nz`
- Instagram: `@kowhaiandclay`
- Hours: By appointment, workshops on selected weekends

### Example Collection Names
- Everyday Forms
- Shoreline Serving
- Kōwhai Season
- Fired Earth Editions

### Example Workshop Names
- Intro to Wheel Throwing
- Hand-Build a Serving Set
- Private Studio Session

## Responsive Notes
- Mobile hero: stack text before images
- Keep image crops tall on mobile for ceramics detail
- Reduce heading sizes sharply on narrow screens to preserve whitespace
- Collection grids collapse to one column below `md`
- Contact layout becomes single column on tablet and below
- Footer content stacks and centers

## Micro-Interactions
- Buttons: translateY(-2px) on hover, stronger shadow
- Image cards: subtle zoom on image only
- Text links: animated underline using pseudo-element
- Header: background fade on scroll
- FAQ: smooth accordion open/close

## Accessibility Requirements
- Maintain AA contrast. Use iron text on limestone/clay backgrounds.
- Focus ring in kowhai with 2px offset.
- All images need descriptive alt text tied to ceramics, workshop, studio, or collection context.
- One H1 per page.

## SEO Notes
Implement baseline metadata and schema.
- Titles and descriptions unique per page
- Organization schema for ceramics studio in Raglan
- Open Graph images can use the home hero asset
- Include sitemap and robots.txt

## Build Constraints
- Next.js App Router
- Static export only
- `images.unoptimized = true`
- No Next `<Image>` for Unsplash
- Keep code modular; use reusable sections instead of one-off page markup where practical
