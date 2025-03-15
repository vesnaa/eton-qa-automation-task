import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Represents EtonDigital "Home" page.
 */
export class HomePage extends BasePage {

    readonly h1Xpath: string = 'xpath=/html/body/main/div[1]/div[1]/div/h1';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigates to this page.
     */
    async navigateTo() {
        await this.page.goto(this.baseUrl);
    }

    /**
     * Gets h1 header on Home page - "Tech Solutions to scale"
     * 
     * @returns Element locator
     */
    getHeader(): Locator {
        return this.page.locator(this.h1Xpath);
    }
}