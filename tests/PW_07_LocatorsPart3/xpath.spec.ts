
import { test, Page, chromium, Browser } from '@playwright/test';

test('xpath test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); //enter the url

    await page.locator("//input[@id='input-firstname']").fill('John');
    //let header = await page.locator("//h1[text()='Register Account']").textContent();

    let header = await page.locator("//h1[text()='Register Account']").innerText();
    //Difference between textContent() and innerText() : 
    // textContent() will return the text of the element even if it is hidden, text with white spaces, extra blank lines, etc.
    // while innerText() will only return the visible text of the element.

    console.log(header);

    await page.pause();

});


//*[contains(text(),'Personal Details')]
//parent/child - immediate child - /
//parent/child - any child - //

/**
 * css : cascaded style sheet
 * 1. id
 * #id  or htmltag#id
 * 
 * 2. class
 * .class or htmltag.class
 * 
 * //3. any attributes based css:
 * htmltag[attribute='value'] or 
 * htmltag[attribute*='value'] or 
 * htmltag[attribute^='value'] or 
 * htmltag[attribute$='value']
 */