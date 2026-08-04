
import { test } from '@playwright/test';


test.use({ storageState: 'storageState.json' });

test('Open Cart Home Page Test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account'); //enter the url
    await page.waitForTimeout(5000);
});

test('Open Cart Cart Page Test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart'); //enter the url
    await page.waitForTimeout(5000);

});

//OTP, QR Code, Captcha, MS Authetnticator  --- dont work in this scenarios