import { Browser, chromium, Page } from 'playwright';

//jane.moore442@nal.com
//VJ{jnLG*h#nI

//IIFE function: config file is not applicable

( async () => {
    
    let browser: Browser = await chromium.launch({channel: 'chrome', headless: false});
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('jane.moore442@nal.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('VJ{jnLG*h#nI');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForSelector("img[title='naveenopencart']");

    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();

})();