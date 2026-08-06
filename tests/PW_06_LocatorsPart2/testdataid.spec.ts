

import { test, Page, chromium, Browser } from '@playwright/test';

test('element with data-testid test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html'); //enter the url
    // //data-testid --mandatory to have
    await page.getByTestId('email-input').fill('naveen@gmail.com');

    // await page.pause();

    // await page.goto('https://app.hubspot.com/signup-hubspot/crm');
    // await page.getByTestId('FormControl1').fill('naveen@open.com');


    await page.pause();
    //hubspot: data-test-id in the DOM

});

