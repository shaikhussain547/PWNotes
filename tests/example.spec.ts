import { test, expect, Page, chromium, Browser, webkit } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('google test', async ({})=> {

//  let browser : Browser = await chromium.launch({channel: 'chrome', headless : false});//open browser
  let browser: Browser = await webkit.launch({ headless: false });
  let page: Page = await browser.newPage();//open new page
  await page.goto('https://www.google.co.in/');//enter the url
  let title : string = await page.title();//get the title
  console.log(title);
  let pageUrl: string = page.url();//get the url
  console.log(pageUrl);

});