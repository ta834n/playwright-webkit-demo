/**
 * Visual Regression sample for the landing page
 * of Playwright Dev
 */

import {expect, test} from "@playwright/test";


/**
 * takes a screenshot of the landing page using the toMatchSnapshot matching
 */
test('should display landing page correct', async ({page}) => {
  await page.goto('https://playwright.dev')
  expect(
    await page.screenshot({animations: "disabled"})
  ).toMatchSnapshot('mySnapshot.png');
});

/**
 * takes a screenshot of the landing page using the toHaveScreenshot matching
 */
test('should display landing page correct using "toHaveScreenshot"', async ({page}) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot('myScreenshot.png', {animations: "disabled"});
});
