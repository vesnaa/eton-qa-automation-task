import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/home.page';

test("Assert h1 title on homepage (Page Object)", async ({page}) => {
    const homepage = new HomePage(page);

    await homepage.navigateTo();
    await expect(homepage.getHeader()).toBeVisible();
    await expect(homepage.getHeader()).toContainText('Tech Solutions to scale');
})