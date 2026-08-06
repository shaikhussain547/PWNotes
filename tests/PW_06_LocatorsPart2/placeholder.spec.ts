import test from "@playwright/test";

test('element with placeholder test', async ({page})=> {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByPlaceholder('First Name').fill('testing');
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Telephone').fill('9876543210');
    await page.waitForTimeout(2000);
});