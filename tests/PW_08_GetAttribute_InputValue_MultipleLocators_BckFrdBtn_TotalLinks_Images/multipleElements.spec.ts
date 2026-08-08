import { test, Page, chromium, Browser, Locator } from '@playwright/test';


test('Total links ', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //links: <a>
    //imags: <img>
    let totalLinks: number = await page.locator('a').count();
    console.log(totalLinks);

});

test('Total links on the page', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //links: <a>
    //imags: <img>
    let allLinks: Locator[] = await page.locator('a').all();
    let totalLinks = allLinks.length;
    console.log('total number of links: ', totalLinks);

    for (let e of allLinks) {
        let text = await e.innerText();
        let hrefVal = await e.getAttribute('href');
        console.log(text, " : ", hrefVal);
    }

});

test('Total images on the page', async ({ page }) => {
    await page.goto('https://flipkart.com');

    //imags: <img>
    let alImages: Locator[] = await page.locator('img').all();
    let totalImages = alImages.length;
    console.log('total number of images: ', totalImages);

    for (let e of alImages) {
        let altVal = await e.getAttribute('alt');
        let srcVal = await e.getAttribute('src');

        console.log(altVal, " : ", srcVal);
    }


});

test('iterate links and click with break ', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let allLinks: Locator[] = await page.locator('a.list-group-item').all(); //13

    for (let e of allLinks) {
        await e.highlight();
        let linkText = (await e.innerText()).trim();
        console.log(linkText);
        await page.waitForTimeout(500);
        if (linkText === 'Transactions') {
            await e.click();
            break;
        }
    }

    await page.pause();

});






