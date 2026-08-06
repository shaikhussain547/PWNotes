import test from "@playwright/test";

test('element with placeholder test', async ({page})=> {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=iphone');
    await page.getByAltText('iPhone').highlight();
    await page.waitForTimeout(2000);
    await page.getByAltText('iPhone').click();
    await page.waitForTimeout(2000);
});