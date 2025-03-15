import { type Page } from '@playwright/test';

/**
 * Represents Base page that contains data common to all pages.
 */
export class BasePage {
    readonly page: Page;
    readonly baseUrl: string;

    constructor(page: Page) {
        this.page = page;
        this.baseUrl = 'https://www.holycode.com/';
    }

     /**
     *  Waits for a certain amount of time.
     * 
     * @param timeout Timeout in milliseconds.
     */
    async wait(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }
}