import { test, expect } from '@playwright/test';
import { CareersPage } from '../../page-objects/careers.page';
const fs = require('fs');

test("Assert QA Specialist position on Careers page (Page Object)", async ({page}) => {
    const careersPage = new CareersPage(page);
    await careersPage.navigateTo();
    await careersPage.clickRejectCookieButton();
    await careersPage.clickQAFilterButton();
    await expect(careersPage.findSeniorQASpecialistPositionCard()).toBeVisible();
})

test("Save titles to text file (Page Object)", async ({page}) => {
    const careersPage = new CareersPage(page);
    await careersPage.navigateTo();
    await careersPage.clickRejectCookieButton();
    await careersPage.clickSerbiaFilterButton();
    
    while(true) {
        if (!await careersPage.findShowMoreButton().isVisible()) {
            break;
        }
        await careersPage.findShowMoreButton().click();
        await careersPage.wait(careersPage.shortTimeout);
    }
    
    let headings: String = await careersPage.findPositionHeadings();
    fs.writeFileSync('headings-pageobject.txt', headings);
})