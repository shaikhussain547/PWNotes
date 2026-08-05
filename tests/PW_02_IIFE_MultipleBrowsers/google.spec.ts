import test, { Browser, chromium, Page } from "@playwright/test";

test('google test', async ({})=> {

    let browser : Browser = await chromium.launch({channel: 'chrome', headless : false});//open browser
    let page: Page = await browser.newPage();//open new page
    await page.goto('https://www.google.co.in/');//enter the url
    let title : string = await page.title();//get the title
    console.log(title);
    let pageUrl: string = page.url();//get the url
    console.log(pageUrl);
    await page.waitForTimeout(3000);
    // await page.pause();
});


// set DEBUG=pw:protocol && npx playwright test
// $env:DEBUG='pw:protocol'; npx --yes tsx src/pwbasics.ts   -> powershell command
// DEBUG=pw:protocol npx tsx src/pwbasics.ts
// npx playwright test tests/PW_02_IIFE_MultipleBrowsers/google.spec.ts