# Kōwhai & Clay — Design Specification

## Design Direction
Kōwhai & Clay should feel earthy, curated, and quietly luxurious. The visual language draws from raw clay, kōwhai pollen, limestone, smoked olive, and dark iron. The site should feel like a ceramics monograph crossed with a boutique interior journal: spacious, image-led, and tactile.

The experience should avoid generic minimalist SaaS patterns. This is a slow, sensory brand. The design should use asymmetry, editorial spacing, and restrained typography to create confidence.

## Overall Feel
- Airy but grounded
- Editorial rather than corporate
- Organic shapes with disciplined spacing
- Calm motion, not flashy animation
- Warm, natural, and premium

## Visual Identity

### Color Palette
Use a palette with warmth and character, not safe grey defaults.

- Clay Sand — `#D8C2AE`
- Kōwhai Gold — `#D7A91D`
- Limestone — `#F3EEE6`
- Smoked Olive — `#6F715C`
- Fired Umber — `#8A5C43`
- Iron Oxide — `#282421`

### Color Usage
- Background default: Limestone `#F3EEE6`
- Secondary surfaces: Clay Sand `#D8C2AE`
- Primary text: Iron Oxide `#282421`
- Accent/action: Kōwhai Gold `#D7A91D`
- Natural secondary accent: Smoked Olive `#6F715C`
- Warm highlight for tags, dividers, or hover underlines: Fired Umber `#8A5C43`

### Typography
Use a pairing that feels elevated and tactile.

- Headings: **Cormorant Garamond** — elegant serif with high contrast and editorial character
- Body: **Manrope** — clean, modern sans with excellent readability
- Optional utility/eyebrow text: **IBM Plex Mono** for collection codes, dates, small labels

### Type Scale
- Display: 64/1.0 desktop, 42 mobile
- H1: 52/1.05 desktop, 36 mobile
- H2: 38/1.1 desktop, 30 mobile
- H3: 28/1.15 desktop, 22 mobile
- Body large: 20/1.6
- Body: 17/1.7
- Small/meta: 13/1.5

### Spacing System
- Base unit: 8px
- Section padding desktop: 96px top/bottom
- Section padding mobile: 64px top/bottom
- Content max width: 1280px
- Narrow reading width: 720px
- Card gap: 24px desktop, 16px mobile

### Radius System
- Image corners: 20px
- Buttons/pills: 999px
- Cards: 24px
- Input fields: 16px

### Shadow System
Keep shadows soft and low-contrast.

- Shadow-sm: `0 8px 24px rgba(40, 36, 33, 0.06)`
- Shadow-md: `0 14px 40px rgba(40, 36, 33, 0.10)`
- Shadow-lg: `0 24px 80px rgba(40, 36, 33, 0.12)`

## Navigation
- Transparent overlay nav on the home hero
- Solid limestone nav on scroll and all interior pages
- Left: logo
- Centre/right: Home, About, Collections, Workshops, Journal, Contact
- Secondary CTA button: “Commission Enquiry”
- Mobile: full-screen slide-down panel with large serif links and compact CTA buttons

## Hero Style
Use a split editorial hero.
- Left column: brand statement, short intro, two CTAs
- Right column: large portrait-oriented image stack with one overlapping smaller detail image
- Background: warm limestone with subtle circular clay-toned pattern wash in one corner
- Include a small location label: “Raglan, Aotearoa New Zealand”

## Section Layout Strategy
Deliberately varied layouts to avoid sameness.

1. **Home intro** — split layout with stacked text and portrait image
2. **Featured collections** — asymmetrical bento grid, mixed card sizes
3. **Process section** — alternating image/text rows
4. **Workshop section** — full-width immersive banner with overlay copy
5. **Journal highlights** — three-column editorial cards
6. **Contact CTA** — centered block with organic rounded container

## Footer
Centered simple footer with three zones stacked on mobile:
- Logo mark + short one-line brand statement
- Navigation links
- Contact details, Instagram handle, newsletter prompt
- Thin top border in clay sand

## Logo Design

### Logo Concept
A refined wordmark paired with a simple botanical-clay emblem. The emblem combines a circular vessel silhouette with a stylised kōwhai bloom made from three petal shapes suspended above a grounded clay bowl form. It should feel minimal, crafted, and recognizable at small sizes.

### Logo SVG
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

### Color Variants
- Primary on light: icon in Fired Umber and Kōwhai Gold, wordmark in Iron Oxide
- Reversed on dark: icon in Limestone and Kōwhai Gold, wordmark in Limestone
- Monochrome: all elements in Iron Oxide or white depending on background

### Usage Notes
- Minimum full logo width: 120px
- Minimum icon-only width: 20px
- Clear space: height of the icon bowl on all sides
- Never place on busy imagery without a soft background wash or overlay

## Favicon Design

### Favicon Concept
Use the simplified bowl-and-bloom icon only. No wordmark. The form should remain legible at 16x16.

### Favicon SVG
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 42C18 34.268 24.268 28 32 28C39.732 28 46 34.268 46 42" stroke="#D7A91D" stroke-width="5" stroke-linecap="round"/>
  <path d="M26 24C28.2 20.2 30.4 18.2 32 17C33.6 18.2 35.8 20.2 38 24" stroke="#D7A91D" stroke-width="5" stroke-linecap="round"/>
  <circle cx="32" cy="26" r="3.5" fill="#D7A91D"/>
</svg>
```

### Favicon Colors
- Primary favicon color: Kōwhai Gold `#D7A91D`
- Transparent background

## Image Plan
Use cohesive warm, natural-light imagery with handmade ceramics, tablescapes, studio process, and interior context. Developers should preserve these exact URLs.

### Home
- Hero main image: `https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&h=1500&fit=crop`
  - Tall studio/product image with tactile ceramic focus
- Hero overlap detail image: `https://images.unsplash.com/photo-1517705008128-361805f42e86?w=700&h=900&fit=crop`
  - Close crop of ceramic vessels and natural styling
- Featured collections card 1: `https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=900&h=1100&fit=crop`
  - Neutral-toned handcrafted pottery on shelf
- Featured collections card 2: `https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&h=700&fit=crop`
  - Table styling with ceramics and linen
- Process section image: `https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=900&fit=crop`
  - Hands/process image with clay-like material mood
- Workshop banner image: `https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1600&h=900&fit=crop`
  - Creative workshop environment
- Journal image 1: `https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=1000&fit=crop`
  - Coffee and ceramics lifestyle cue
- Journal image 2: `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=1000&fit=crop`
  - Warm interior still life
- Journal image 3: `https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=1000&fit=crop`
  - Floral styling with natural texture

### About
- Founder portrait substitute: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&h=1200&fit=crop`
- Studio shelves/interior: `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&h=800&fit=crop`
- Materials/detail image: `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&h=1100&fit=crop`

### Collections
- Collection hero: `https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1600&h=800&fit=crop`
- Collection grid 1: `https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=1100&fit=crop`
- Collection grid 2: `https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=900&h=1100&fit=crop`
- Collection grid 3: `https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900&h=1100&fit=crop`
- Collection grid 4: `https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=1100&fit=crop`

### Workshops
- Workshops hero: `https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&h=900&fit=crop`
- Studio table setup: `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&h=800&fit=crop`
- Group/creative atmosphere: `https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000&h=800&fit=crop`

### Journal
- Article hero 1: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop`
- Article hero 2: `https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=1200&h=800&fit=crop`
- Article hero 3: `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop`

### Contact
- Contact banner: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&h=800&fit=crop`
- Studio exterior/interior mood: `https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=900&fit=crop`

## Components
- TransparentHeader
- HeroSplitEditorial
- EyebrowLabel
- PrimaryButton
- SecondaryButton
- CollectionBentoGrid
- ImageTextBand
- PullQuoteBlock
- WorkshopBanner
- JournalCardGrid
- TestimonialStrip
- NewsletterCard
- ContactPanel
- CenteredFooter

## Page-by-Page Design

### Home
1. Transparent hero nav over limestone background
2. Split hero with statement, CTAs, stacked images
3. Intro band with founder note and small stats
4. Asymmetrical featured collections grid
5. Process section with alternating image/text rhythm
6. Workshop banner with dark overlay and CTA
7. Journal highlights in editorial cards
8. Newsletter card
9. Centered footer

### About
- Intro hero with founder image and manifesto copy
- Studio story in narrow editorial column
- Full-width studio interior image
- Values grid: craft, utility, variation, locality
- Quote block over clay sand background

### Collections
- Wide hero banner
- Filter/tag row style block for collection categories
- Masonry-inspired product/story cards
- Bespoke commissions CTA band

### Workshops
- Image-led hero with session details
- Two-column overview: what to expect / who it suits
- Workshop formats in cards
- Gallery strip
- Booking CTA panel

### Journal
- Minimal editorial listing with large featured article and smaller stacked entries
- Each article card uses serif title and compact meta in mono

### Contact
- Warm banner image
- Contact form card + studio details side by side
- Map placeholder card style
- FAQ accordion for commissions and workshops

## Responsive Behaviour
- Collapse split hero into single-column stack on mobile; text first, images second
- Bento collection grid becomes one-column stacked cards on small screens
- Navigation converts to full-screen menu
- Journal cards move from 3 columns to 1 column
- Workshop banner text becomes left-aligned single column on mobile
- Footer stacks vertically with centered content

## Micro-Interactions
- Buttons lift by 2px on hover with subtle shadow increase
- Collection cards scale images to 1.03 on hover
- Underlines animate left-to-right on text links
- Header background fades from transparent to limestone on scroll
- Journal cards shift upward slightly on hover
- FAQ accordions use smooth height transition

## Accessibility Notes
- All text/background color pairs must meet WCAG AA
- Keep serif headings large enough for readability
- Hover effects must have non-motion fallback via color/underline change
- Forms need clear labels and visible focus states in Kōwhai Gold outline
