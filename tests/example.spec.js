// @ts-check
const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

// Added test required by assignmnet-part3-playwright.md

test("root route returns 200 status code", async ({ page }) => {
  // Act: Navigate to the root route
  const response = await page.goto(websiteURL);

  // Assert: Check if status code is 200
  expect(response.status()).toBe(200);
});

/* ################################# CEMENTARY ###################################################################################################### */

/* 
test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
 */
