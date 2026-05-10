const { test, expect } = require('@playwright/test');

test.describe('ZenSpace App', () => {

  test.beforeEach(async ({ page }) => {

    // Open exact HTML file
    await page.goto('http://127.0.0.1:5500/Social%20Media%20App/Website.Html');

    // Wait until fully loaded
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);

  });
// ─────────────────────────────
  // Home Feed Loads
  // ─────────────────────────────
  test('Home feed loads', async ({ page }) => {

    await expect(page.locator('#feed'))
      .toBeVisible();

    await expect(page.locator('.post').first())
      .toBeVisible();

  });

  // ─────────────────────────────
  // Create New Post
  // ─────────────────────────────
  test('Create new post', async ({ page }) => {

    const message = 'Hello Playwright';

    await page.locator('#compose-text')
      .fill(message);

    await page.click('#post-btn');

    await expect(
      page.locator('#posts-container').getByText(message)
    ).toBeVisible();

  });

  // ─────────────────────────────
  // Like Post
  // ─────────────────────────────
  test('Like a post', async ({ page }) => {

    const likeButton = page.locator('.action-btn').first();

    await likeButton.click();

    await expect(likeButton)
      .toHaveClass(/liked/);

  });

  // ─────────────────────────────
  // Open Comment Section
  // ─────────────────────────────
  test('Open comments section', async ({ page }) => {

    await page.locator('.comment-icon')
      .first()
      .click();

    await expect(page.locator('.comment-section').first())
      .toBeVisible();

  });

  // ─────────────────────────────
  // Add Comment
  // ─────────────────────────────
  test('Add comment', async ({ page }) => {

    await page.locator('.comment-icon')
      .first()
      .click();

    await page.locator('#ci-1')
      .fill('Nice post');

    await page.locator('.comment-submit')
      .first()
      .click();

    await expect(
      page.locator('#comments-1').getByText('Nice post')
    ).toBeVisible();

  });

  // ─────────────────────────────
  // Dark Mode
  // ─────────────────────────────
  test('Dark mode toggle', async ({ page }) => {

    await page.click('#dark-toggle');

    await expect(page.locator('body'))
      .toHaveClass(/dark/);

  });

  // ─────────────────────────────
  // Navigate Explore
  // ─────────────────────────────
  test('Navigate to Explore', async ({ page }) => {

    await page.click('#nav-explore');

    await expect(page.locator('#explore-feed'))
      .toHaveClass(/active/);

    await expect(page.locator('#search-input'))
      .toBeVisible();

  });

  // ─────────────────────────────
  // Explore Search
  // ─────────────────────────────
  test('Search posts', async ({ page }) => {

    await page.click('#nav-explore');

    await page.locator('#search-input')
      .fill('transformer');

    await expect(page.locator('#explore-content'))
      .toContainText('transformer');

  });

  // ─────────────────────────────
  // Profile Page
  // ─────────────────────────────
  test('Profile page opens', async ({ page }) => {

    await page.click('#nav-profile');

    await expect(page.locator('#profile-view'))
      .toHaveClass(/active/);

  });

  // ─────────────────────────────
  // Home Button Click
  // ─────────────────────────────
  test('Home button click works', async ({ page }) => {

    await page.click('#nav-explore');

    await page.click('#nav-feed');

    await expect(page.locator('#feed'))
      .toHaveClass(/active/);

    await expect(page.locator('.post').first())
      .toBeVisible();

  });

  // ─────────────────────────────
  // Follow User
  // ─────────────────────────────
  test('Follow user', async ({ page }) => {

    await page.click('#nav-explore');

    const followBtn = page.locator('.follow-btn').first();

    await followBtn.click();

    await expect(followBtn)
      .toContainText(/Follow|Following/);

  });

  // ─────────────────────────────
  // Infinite Scroll
  // ─────────────────────────────
  test('Infinite scroll loads posts', async ({ page }) => {

    const before = await page.locator('.post').count();

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(2500);

    const after = await page.locator('.post').count();

    expect(after).toBeGreaterThan(before);

  });

  // ─────────────────────────────
  // Create Post With Image
  // ─────────────────────────────
  test('Create post with image', async ({ page }) => {

    await page.locator('#compose-text')
      .fill('Image test');

    await page.click('button[title="Attach image"]');

    await page.click('#post-btn');

    await expect(
      page.locator('#posts-container').getByText('Image test')
    ).toBeVisible();

  });

});