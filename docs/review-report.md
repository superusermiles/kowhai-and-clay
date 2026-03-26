# Review Report: Kōwhai & Clay
**Status: FAIL**
**Live URL:** https://kowhai-and-clay.vercel.app

## Checklist
- [x] Site is live and accessible
- [x] Content matches brief
- [x] All pages exist and render
- [x] SEO baseline met (meta tags, schema)
- [x] No placeholder text

## Issues Found
- `site/app/components.tsx:25-27` — The logo SVG still uses the original `viewBox="0 0 200 48"` with a rendered height of `h-10`. The rework brief required a taller/wider SVG canvas with a slightly reduced rendered height to stop the logo looking cut off. This implementation still reflects the old 48px-tall canvas, so the requested logo-cropping fix is not clearly applied.
- `site/app/components.tsx:66` — Primary CTA styling is still driven by `bg-iron` with `hover:bg-umber`. The approved QA direction required moving the primary CTA hierarchy to fired umber by default.
- `site/app/page.tsx:107-108` — The secondary CTA on the home hero uses a generic white hover treatment (`hover:bg-white/70`) instead of the requested clay-outline secondary system.
- `site/app/page.tsx:275` and `site/app/page.tsx:344` — Light-on-dark and newsletter CTA treatments do not follow the requested hierarchy of umber primary, clay-outline secondary, and limestone inverse only on dark surfaces. CTA system remains inconsistent with the approved rework direction.

## Verdict
The site is live, complete, and broadly aligned with the editorial ceramics brief, and the SEO baseline is in place. However, this review fails because the specific rework items called out in the prior QA direction are not fully implemented in code: the logo fix still uses the original 200×48 canvas, and the CTA color hierarchy has not been updated to the approved umber/clay-outline/limestone-inverse system. These visual-system issues need one more pass before final approval.
