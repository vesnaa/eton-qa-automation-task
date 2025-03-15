# EtonDigital QA Automation task

This is QA Automation task for EatonDigital that I implemented in TypeScript using Playwright framework.

Task definition
--
__Write automated tests, in Cypress or Playwright framework, for the
following few scenarios on the Holycode website ( https://www.holycode.com/):__

1. Setup test framework, and add test that opens the Holycode website, then asserts that the page h1 title is “Tech Solutions to scale”
   
2. Add test that navigates to the Careers page, filters positions for QA, and asserts that the team for Senior QA Specialist Position is EtonDigital
   
3. Add test that navigates to the Careers page, filters positions for Serbia, then saves titles (for all positions in Serbia) to a text file.

Finished code should be committed to the GitHub repository, along with the Readme.md file(setup instructions, how to run tests).

- EtonDigita QA Automation task is implemented in 2 ways - with and without Page Object Pattern.
- Tests implemented with Page Object Pattern are stored in `tests/page-object` directory where related Page Objects are stored in `page-objects`directory.

## Prerequisites

To run these tests, you will need NodeJS, NPM, and Playwright installed on the target machine.

NodeJS and NPM installation varies depending on type of operating system used, so this won't be explained here.

__NodeJS documentation__ can be found: https://nodejs.org/en .

__NPM documentation__ can be found: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm .

__Install Playwright__ by running `npm init playwright@latest` in the root of this project.

During the installation choose `TypeScript` as preferred language, choose `tests` as end-to-end tests directory, choose to install Playwright browsers, and do not override `playwright.config.ts` file.

Afterwards, remove generated `example.spec.ts` file, and `test-examples` directory.

## Running the tests

To run the tests, type `npx playwright test`. This will run all of the tests in the parallel in multiple browse headless mode (Chromium, Firefox, Webkit browser).

Summary of test results will be displayed in the console, while the detailed report will be available in `playwright-report/index.html` file.

Result of the test named `Save titles to text file` will be stored in `headings.txt` file, and of the test named `Save titles to text file (Page Object)` in `headings-pageobject.txt` file.