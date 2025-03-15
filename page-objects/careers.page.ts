import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Represents EtonDigital "Careers" page.
 */
export class CareersPage extends BasePage {

    readonly shortTimeout: number = 2000;
    readonly longTimeout: number = 5000;

    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigates to this page.
     */
    async navigateTo() {
        await this.page.goto(this.baseUrl + 'careers/');
    }

    /**
     * Clicks on "Reject" button on cookies selection dialog.
     */
    async clickRejectCookieButton() {
        await this.page.getByRole('button', { name: 'Reject' }).click();
        await this.wait(this.longTimeout);
    }

    /**
     * Clicks on button for filtering open position cards titled "QA".
     */
    async clickQAFilterButton() {
        await this.page.getByRole('button', { name: 'QA' }).click();
        await this.wait(this.shortTimeout);
    }

    /**
     * Clicks button for filtering open position cards titled "Serbia".
     */
    async clickSerbiaFilterButton() {
        await this.page.getByRole('button', { name: 'Serbia' }).click();
        await this.wait(this.shortTimeout);
    }

    /**
     * Finds open position card titled "Senior QA Specialist"
     * 
     * @returns Position card titled "Senior QA Specialist" page element locator.
     */
    findSeniorQASpecialistPositionCard(): Locator {
        return this.page.locator('css=div.c-careercard')
            .filter({ hasText: 'Senior QA Specialist' })
            .filter({ hasText: 'Team: EtonDigital' })
            .first();
    }

    /**
     * Finds "Show More" button.
     * 
     * @returns "Show More" button page element locator.
     */
    findShowMoreButton(): Locator {
        return this.page.getByText(' Show More ');
    }

    /**
     * Finds headings of all currently displayed open positions.
     * 
     * @returns All current open positions headings as string, separated by newline.
     */
    async findPositionHeadings(): Promise<string> {
        return (await this.page.locator('css=div.c-careercard').getByRole('heading').allInnerTexts()).join('\n');
    }
}