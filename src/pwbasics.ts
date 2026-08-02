import { Browser, chromium, firefox, Page, webkit } from 'playwright';

//Write playwright test using IIFE function : config file is not applicable

( async () => {
    
    //chromium browsers : chrome, msedge, opera, brave 
    let browser: Browser = await chromium.launch({channel: 'chrome', headless: false});
    // let browser: Browser = await chromium.launch({channel: 'msedge', headless: false});
    // let browser: Browser = await chromium.launch({ headless: false, executablePath: 'Opera.exe path' });
    // let browser: Browser = await chromium.launch({ headless: false, executablePath: 'C:\\Users\\hussa\\AppData\\Local\\BraveSoftware\\Brave-Browser\\Application\\brave.exe' });
    // let browser: Browser = await chromium.launch({channel: 'chromium', headless: false}); //CFT

    //firefox : Nightly
    // let browser: Browser = await firefox.launch({headless: false});

    //webkit: safari
    // let browser: Browser = await webkit.launch({ headless: false });

    let page: Page = await browser.newPage();
    await page.goto('https://www.google.co.in/');
    let title: string = await page.title();
    console.log('Title is ',title);
    let url: string = await page.url();
    console.log('The URL is, ',url);
    browser.close();

})();