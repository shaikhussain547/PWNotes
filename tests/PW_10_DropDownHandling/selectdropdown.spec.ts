
//html tag: <select> : 

import { test, Page, chromium, Browser } from '@playwright/test';

test('select drop down value test', async ({ page }) => {

    await page.goto('https://orangehrm.com/contact-sales'); //enter the url

    await page.getByRole('combobox', { name: 'Country' }).selectOption({ label: 'Andorra' }); //visible text
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Country' }).selectOption({ value: 'Argentina' }); //value attribute
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Country' }).selectOption({ index: 10 }); //index number
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Country' }).selectOption('India');//direct dropdown vlaue
    await page.waitForTimeout(2000);
    let currentVal = await page.getByRole('combobox', { name: 'Country' }).inputValue();
    console.log(currentVal);
    await page.waitForTimeout(2000);

});

test('multi select drop down value test', async ({ page }) => {
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html'); //enter the url
    await page.locator('[name = "Month"]').selectOption(["January", "May", "November"]);
    await page.pause();

});

//https://www.magupdate.co.uk/magazine-subscription/phrr