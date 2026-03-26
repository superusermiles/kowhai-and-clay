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
- `site/app/contact/page.tsx:64-83` still renders the main enquiry experience as static inputs plus a button, with no `<form>` element, no `name` attributes, no submit handling, and no working action. The primary commission and workshop conversion path remains non-functional in the repo.
- `site/app/contact/page.tsx:81-83` still uses the CTA copy `Prepare Enquiry`, and the same unfinished wording is still visible on the live page at `/contact/`.

## Verdict
The site is live, all core pages render, the brand and content align well with the brief, and the SEO baseline remains in place with metadata, robots, sitemap, and LocalBusiness schema. The previous fail issue has not been fully fixed. The contact page still presents a production-style enquiry form that does not actually submit anywhere, and the CTA text still reads like unfinished UX. Because the key conversion path for commissions and workshop bookings is still incomplete in both the repo and the live site, this review remains a fail.
