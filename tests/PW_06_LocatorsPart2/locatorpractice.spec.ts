import test from "@playwright/test";

test('radio and checkbox test', async ({page})=> {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('radio',{name:'Yes'}).click();
    await page.waitForTimeout(2000);
    await page.getByRole('checkbox').click();
    await page.waitForTimeout(2000);
});