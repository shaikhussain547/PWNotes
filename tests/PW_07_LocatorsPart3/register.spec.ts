
import { test, Page, chromium, Browser } from '@playwright/test';

test('Register test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); //enter the url
    await page.waitForTimeout(1000);

    //getByTitle *******
    await page.getByTitle('naveenopencart').highlight();
    await page.waitForTimeout(1000);

    //getByRole for headers ****
    let registerHeading = await page.getByRole('heading', { name: 'Register Account'}).innerText();
    console.log(registerHeading);

    //getByRole *******
    await page.getByRole('textbox',{name : 'First Name'}).fill('John');
    await page.waitForTimeout(1000);

    //getByPlaceholder *******
    await page.getByPlaceholder('Last Name').fill('Wick');
    await page.waitForTimeout(1000);

    //locator with has-text *******
    let telephoneLabel = await page.locator(`label:has-text("Telephone")`).innerText();
    console.log(telephoneLabel);

    //getByAltText *******
    await page.getByAltText('naveenopencart').highlight();
    await page.waitForTimeout(1000);

    //getByText *******
    let yourPwd = await page.getByText('Your Password',{exact : true})
    console.log(yourPwd);

    //getByLabel *******
    await page.getByLabel('Password',{exact : true}).fill('John@123');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password Confirm',{exact : true}).fill('John@345');
    await page.waitForTimeout(1000);
    await page.getByRole('radio',{name : 'Yes'}).click();
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox').click();
    await page.waitForTimeout(1000);

    //getByRole for links *******
    await page.getByRole('link', { name: 'Forgotten Password' }).click();
    await page.waitForTimeout(2000);

});