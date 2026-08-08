import { test, Page } from '@playwright/test';

test('jquery drop down value test', async ({ page }) => {
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/'); //enter the url
    // await page.locator('#justAnInputBox').click();
    await page.getByPlaceholder('Select').first().click();
    //45 --> 3 --> first
    // await page.locator('span.comboTreeItemTitle')
    //     .filter({ hasText: 'choice 5' })
    //     .first()
    //     .click();

    selectChoice(page, ['choice 5', 'choice 4', 'choice 6 2 2', 'choice 7']);
    await page.pause();
});

async function selectChoice(page: Page, choices: string[]): Promise<void> {
    for (let ch of choices) {
        await page.locator('span.comboTreeItemTitle').filter({ hasText: `${ch}` }).first().click();

    }
}

//If any step written with await then that function should be return with async and Promise.
//If any function is returning promise then that function should be called with await.