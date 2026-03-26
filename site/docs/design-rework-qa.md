# Kōwhai & Clay — Design Rework QA Handoff

Live URL: https://kowhai-and-clay.vercel.app
Repo path: /home/bob/workspace/kowhai-and-clay/site

## QA verdict
Brand direction is strong. The photography, type pairing, and calm editorial composition are working. Two issues need rework before sign-off:

1. **Header logo cutoff** — the wordmark is visually cropped at the top and bottom because the SVG canvas is too shallow for the Cormorant letterforms and the rendered height is too aggressive.
2. **Button color clash** — CTA styles currently jump between iron fill, pale limestone fill on dark imagery, and outline states that turn kowhai/umber on hover. The system feels improvised rather than intentional.

Approved direction: keep the restrained ceramics palette. Use **umber/clay-led CTAs** as the primary action language. Keep **kowhai** as a small accent for highlights, focus, and tiny signal moments only.

---

## Fix 1 — Header logo sizing and cropping

### Issue
Current logo SVG in `app/components.tsx` uses:
- `viewBox="0 0 200 48"`
- rendered class: `h-10 w-[170px] sm:w-[190px]`
- text baseline at `y="31"` with `fontSize="28"`

This leaves too little vertical breathing room for the Cormorant ascenders/descenders. The wordmark looks trimmed even if the browser is technically rendering it.

### Exact recommendation
Use a taller and wider SVG canvas, then reduce the rendered height slightly.

#### Replace logo container with these proportions
- **New viewBox:** `0 0 232 64`
- **Rendered size:** `h-8 w-[172px] sm:h-9 sm:w-[194px]`
- Keep the bowl icon at the left.
- Move the wordmark slightly right for cleaner spacing.

#### Exact logo geometry guidance
- Bowl icon group should sit roughly within `x: 14–46`, `y: 14–42`
- Wordmark start position: `x="60"`
- Wordmark baseline: `y="39"`
- Wordmark size: `fontSize="30"`
- Preserve `fontWeight="600"`
- Keep `letterSpacing="0.5"`

This gives the serif forms room to breathe above and below while keeping the mark refined, not oversized.

### Implementation target
Update `LogoMark()` in `app/components.tsx` to:
- change the SVG `viewBox`
- reduce rendered height from `h-10` to `h-8 sm:h-9`
- shift the text baseline down slightly
- widen the canvas so the icon and wordmark feel balanced, not compressed

### Acceptance criteria
- No visible clipping at desktop, tablet, or mobile widths
- Logo sits comfortably in the sticky header without crowding the top/bottom border
- Wordmark remains legible at mobile size
- Left icon and wordmark feel optically centered vertically

---

## Fix 2 — Coherent button color system

### Current problem
The site currently mixes several competing CTA treatments:
- primary buttons use **iron** fill with limestone text
- workshop hero button on dark image uses **limestone** fill
- outline buttons hover toward **kowhai** or **umber** depending on location
- newsletter button returns to **iron**

The result is too many action colors for a brand that should feel calm and edited.

### Approved button hierarchy
Use one clear system across the whole site.

#### 1) Primary CTA — Umber solid
Use for the main action on each page.

- Background: `#8A5C43` (`umber`)
- Text: `#F3EEE6` (`limestone`)
- Hover background: `#6F715C` (`olive`) **or** a slightly deeper umber tint if preferred; olive is approved because it stays natural and sophisticated
- Border: none
- Shadow: `0 14px 40px rgba(40, 36, 33, 0.12)` on hover/focus only

**Use for:**
- Header “Commission Enquiry”
- Hero “View Collections”
- About “Commission Enquiry”
- Contact “Email the studio”
- Collections “Start an Enquiry”
- Newsletter “Subscribe”

#### 2) Secondary CTA — Soft clay outline
Use for secondary actions on light backgrounds.

- Background: `transparent`
- Border: `1px solid rgba(138, 92, 67, 0.28)`
- Text: `#282421` (`iron`)
- Hover background: `rgba(216, 194, 174, 0.28)` (`clay` wash)
- Hover border: `#8A5C43` (`umber`)
- Hover text: `#282421`

**Use for:**
- Hero “Book a Workshop”
- “Read the Studio Story”
- Instagram / supporting links
- any non-primary conversion path

#### 3) Inverse CTA on dark photography — Limestone solid only when required
For dark image overlays, do **not** introduce a new accent color. Use a simple inverse style.

- Background: `#F3EEE6` (`limestone`)
- Text: `#282421` (`iron`)
- Hover background: `#FFFFFF`
- No kowhai border or mixed hover states

**Use only for:**
- Workshop banner “Explore Workshops”
- Workshops page dark booking band button

#### 4) Accent use — Kōwhai reserved
Do **not** use kowhai as a button hover or button fill.
Use it only for:
- focus ring
- tiny status dots
- subtle underline/accent rules
- favicon/logo flower detail

This keeps the yellow precious and brand-specific.

---

## Recommended component cleanup

### In `app/components.tsx`
Create reusable classes/components instead of one-off CTA styling.

#### Suggested API
- `PrimaryButton` → umber solid
- `SecondaryButton` → soft clay outline
- `InverseButton` → limestone solid for dark backgrounds

### Exact class direction

#### Primary button
```tsx
className="inline-flex items-center justify-center rounded-full bg-umber px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-[0_14px_40px_rgba(40,36,33,0.12)]"
```

#### Secondary button
```tsx
className="inline-flex items-center justify-center rounded-full border border-umber/30 px-6 py-3 text-sm uppercase tracking-[0.2em] text-iron transition duration-300 hover:-translate-y-0.5 hover:border-umber hover:bg-clay/30"
```

#### Inverse button
```tsx
className="inline-flex items-center justify-center rounded-full bg-limestone px-6 py-3 text-sm uppercase tracking-[0.2em] text-iron transition duration-300 hover:-translate-y-0.5 hover:bg-white"
```
```

---

## Page-by-page button assignments

### Header
- `Commission Enquiry` → **Primary** umber solid
- mobile `Enquire` pill → **Secondary** outline or compact primary if stronger conversion is preferred; approved preference is compact secondary to reduce noise

### Home
- `View Collections` → **Primary**
- `Book a Workshop` → **Secondary**
- `Read the Studio Story` → **Secondary**
- `Explore Workshops` over dark image → **Inverse**
- `Subscribe` → **Primary**

### About
- `Commission Enquiry` → **Primary**

### Contact
- `Email the studio` → **Primary**
- `Follow on Instagram` → **Secondary**

### Collections
- `Start an Enquiry` → **Primary**

### Workshops
- `Book a Workshop` in dark booking band → **Inverse**

### Journal
- keep text links understated; no button changes required unless a CTA is added later

---

## Visual QA checklist for updated build
After rework, validate against the live Vercel site at:
- desktop: 1440px
- tablet: 768px
- mobile: 390px

### Sign-off conditions
1. Header logo is fully visible with no top/bottom clipping.
2. Header height feels balanced after logo resize.
3. Button styles are systemized across all pages.
4. Primary CTAs are consistently umber.
5. Secondary CTAs are consistently outlined/clay-tinted.
6. Inverse CTAs only appear on dark-image sections.
7. Kōwhai appears only as an accent, not as competing CTA color.
8. Hover/focus states feel subtle and editorial, not bright or salesy.

---

## Approved visual direction summary
Keep Kōwhai & Clay calm, tactile, and editorial. The palette already works. The fix is restraint:
- give the logo more vertical room
- make buttons feel like one family
- let umber lead conversion
- let kōwhai stay rare and special

Once these changes are live, the design should be ready for final QA sign-off.
