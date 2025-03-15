import {test, expect, Locator} from '@playwright/test';
const fs = require('fs');

test("Assert h1 title on homepage", async ({page}) => {
    const h1Xpath = 'xpath=/html/body/main/div[1]/div[1]/div/h1';

    await page.goto('https://www.holycode.com/');
    await expect(page.locator(h1Xpath)).toBeVisible();
    await expect(page.locator(h1Xpath)).toContainText('Tech Solutions to scale');
})

test("Assert QA Specialist position on Careers page", async ({page}) => {
    await page.goto('https://www.holycode.com/careers/');
    await page.getByRole('button', {name: 'Reject'}).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', {name: 'QA'}).click();
    await page.waitForTimeout(2000);
    await expect(
        page.locator('css=div.c-careercard')
        .filter({hasText: 'Senior QA Specialist'})
        .filter({hasText: 'Team: EtonDigital'})
        .first()
    ).toBeVisible();
})

test("Save titles to text file", async ({page}) => {
    await page.goto('https://www.holycode.com/careers/');
    await page.getByRole('button', {name: 'Reject'}).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', {name: 'Serbia'}).click();
    await page.waitForTimeout(2000);
    
    while(true) {
        let showMoreButton: Locator = page.getByText(' Show More ');
        if (!await showMoreButton.isVisible()) {
            break;
        }
        await showMoreButton.click()
        await page.waitForTimeout(1000);
    }
    
    let headings: String = (await page.locator('css=div.c-careercard').getByRole('heading').allInnerTexts()).join('\n')
    fs.writeFileSync('headings.txt', headings);
})