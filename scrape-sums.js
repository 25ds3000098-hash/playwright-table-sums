const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage();
  let total = 0;
  const urls = [
    'https://sanand0.github.io/tdsdata/js_table/?seed=66',
    'https://sanand0.github.io/tdsdata/js_table/?seed=67',
    'https://sanand0.github.io/tdsdata/js_table/?seed=68',
    'https://sanand0.github.io/tdsdata/js_table/?seed=69',
    'https://sanand0.github.io/tdsdata/js_table/?seed=70',
    'https://sanand0.github.io/tdsdata/js_table/?seed=71',
    'https://sanand0.github.io/tdsdata/js_table/?seed=72',
    'https://sanand0.github.io/tdsdata/js_table/?seed=73',
    'https://sanand0.github.io/tdsdata/js_table/?seed=74',
    'https://sanand0.github.io/tdsdata/js_table/?seed=75'
  ];
  for(const url of urls){
    await page.goto(url);
    const numbers = await page.evaluate(()=>Array.from(document.querySelectorAll('td,th')).map(el=>parseFloat(el.innerText)).filter(n=>!isNaN(n)));
    const sum = numbers.reduce((a,b)=>a+b,0);
    total += sum;
  }
  console.log(`GRAND TOTAL SUM OF ALL TABLES: ${total}`);
  await browser.close();
})();
