// @ts-check
const { test, expect } = require('@playwright/test');

// Global Variables
const homePage = 'http://127.0.0.1:5500/portfolio_one/';
const projectsPage = 'http://127.0.0.1:5500/portfolio_one/projects.html';
const contactPage = 'http://127.0.0.1:5500/portfolio_one/contact.html';

// Title Test
test('page title', async ({ page }) => {
  const pageTitle = 'Paul Garton Web Dev';
  await page.goto(homePage);

  await expect(page).toHaveTitle(pageTitle);
});

// Page Navigation Tests
test('project page from homepage', async ({ page }) => {});
