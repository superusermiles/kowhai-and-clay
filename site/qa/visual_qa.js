const { chromium } = require('playwright');
const fs = require('fs');
(async() => {
  const browser = await chromium.launch({headless:true});
  const pages = [
    {name:'home', url:'https://kowhai-and-clay.vercel.app/'},
    {name:'about', url:'https://kowhai-and-clay.vercel.app/about/'},
    {name:'contact', url:'https://kowhai-and-clay.vercel.app/contact/'}
  ];
  const viewports = [
    {label:'desktop', width:1440, height:2200},
    {label:'tablet', width:768, height:1800},
    {label:'mobile', width:390, height:1600}
  ];
  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    for (const p of pages) {
      const page = await context.newPage();
      await page.goto(p.url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `qa/${p.name}-${vp.label}.png`, fullPage: true });
      const info = await page.evaluate(() => {
        const nav = [...document.querySelectorAll('a')].map(a => ({text:(a.textContent||'').trim(), href:a.getAttribute('href')}));
        const imgs = [...document.images].map(img => ({alt: img.alt, src: img.currentSrc || img.src, ok: img.complete, w: img.naturalWidth, h: img.naturalHeight}));
        return {
          title: document.title,
          h1: document.querySelector('h1')?.textContent?.trim() || '',
          nav,
          imgs,
          bodyBg: getComputedStyle(document.body).backgroundColor,
          bodyColor: getComputedStyle(document.body).color,
          headingFont: (() => { const h = document.querySelector('h1,h2,h3'); return h ? getComputedStyle(h).fontFamily : ''; })(),
          bodyFont: getComputedStyle(document.body).fontFamily,
          hasSvgLogo: !!document.querySelector('header svg, footer svg'),
          menuButton: !![...document.querySelectorAll('button')].find(b => /menu/i.test(b.textContent||'') || b.getAttribute('aria-label')?.match(/menu/i)),
          faqButtons: [...document.querySelectorAll('button')].map(b => (b.textContent||'').trim()).filter(Boolean).slice(0,20)
        };
      });
      fs.writeFileSync(`qa/${p.name}-${vp.label}.json`, JSON.stringify(info, null, 2));
      await page.close();
    }
    await context.close();
  }
  await browser.close();
})();
