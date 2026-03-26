# Review Report: Kōwhai & Clay
**Status: FAIL**
**Live URL:** https://kowhai-and-clay.vercel.app

## Checklist
- [x] Site is live and accessible
- [x] Content matches brief
- [x] All pages exist and render
- [x] SEO baseline met (meta tags, schema)
- [ ] No placeholder text

## Issues Found
- `site/app/contact/page.tsx:81-83` labels the primary contact form CTA as `Prepare Enquiry`, which reads like unfinished placeholder UX rather than a final production action.
- `site/app/contact/page.tsx:64-78` renders the enquiry form as static inputs and a textarea with no working submission path, no `name` attributes, and no action handling. This leaves the main commission/workshop conversion flow incomplete.

## Verdict
The site is live, all required pages exist, the visual direction strongly matches the brief, and the SEO baseline is in place with metadata, robots, sitemap, and LocalBusiness schema. The review still fails because the main contact conversion path is not production-ready: the enquiry form is presented as a functional form, but it is only a static stub and uses unfinished CTA language. Rework should make the form submit properly or replace it with a clear mailto/enquiry flow and final action copy.
