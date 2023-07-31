// @ts-check
const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

// Added test required by assignmnet-part3-playwright.md
test("root route returns 200 status code", async ({ page }) => {
  // Act: Navigate to the root route
  const response = await page.goto(websiteURL);

  // Assert: Check if status code is 200
  expect(response.status()).toBe(200);

  // Check if Heading
  await page.getByRole("heading", { name: "Hello Professor." }).click();
});

test("Check if the h1 tag content is 'Hello Professor.'", async ({ page }) => {
  // Act: Navigate to the root route
  await page.goto(websiteURL);

  // Act: Get the content of the H1 tag
  const h1Content = await page.textContent("h1");

  // Assert: Check if H1 content is "Hello Professor."
  expect(h1Content).toBe("Hello Professor.");
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
