import { test } from '@playwright/test';

test('Total links on the page', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');


    let allLinksText: string[] = await page.locator('//a[@href]').allInnerTexts();
    //let allLinksText: string[] = await page.locator('//a[@href]').allTextContents();


    for (let e of allLinksText) {
        console.log(e);
    }

});