
import { test } from '@playwright/test';

test('css test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); //enter the url

    await page.locator('#input-firstname').fill('naveen');

    await page.locator("input#input-email").fill('naveen@gmail.com');

    await page.pause();

});