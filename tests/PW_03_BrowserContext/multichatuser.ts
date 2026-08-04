import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

( async () => {

    let browser: Browser = await chromium.launch({channel: 'chrome', headless: false, slowMo: 2000});
    let ctx1: BrowserContext = await browser.newContext();
    let ctx2: BrowserContext = await browser.newContext();

    let page1: Page =await ctx1.newPage();
    let page2: Page =await ctx2.newPage();

    await page1.goto('http://localhost:3000');//naveen
    await page2.goto('http://localhost:3000');//ankita

    await page1.locator('[data-testid="username-input"]').fill('Naveen');
    await page1.locator('[data-testid="join-btn"]').click();

    await page2.locator('[data-testid="username-input"]').fill('Ankita');
    await page2.locator('[data-testid="join-btn"]').click();

    await page1.locator('[data-testid="message-input"]').fill('Hi Ankita how are u??')
    await page1.locator('[data-testid="send-btn"]').click();

    await page2.locator('[data-testid="message-input"]').fill('Hi Naveen, im good... how are u??')
    await page2.locator('[data-testid="send-btn"]').click();


})();