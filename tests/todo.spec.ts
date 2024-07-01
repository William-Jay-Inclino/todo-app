import { test, expect } from '@playwright/test';

test.describe('Todo App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should add a new todo', async ({ page }) => {
    await page.fill('input[placeholder="Add a todo"]', 'New Todo');
    await page.click('button:has-text("Add")');
    await expect(page.locator('span.text-truncate')).toHaveText('New Todo');
    await expect(page.locator('.Toastify__toast')).toHaveText('Todo added!');
  });

  test('should update an existing todo', async ({ page }) => {
    // Add a todo first
    await page.fill('input[placeholder="Add a todo"]', 'Old Todo');
    await page.click('button:has-text("Add")');
  
    // Click the edit button
    await page.click('button:has(i.fas.fa-edit)');
    await page.fill('input[value="Old Todo"]', 'Updated Todo');
    await page.click('button:has(i.fas.fa-check)');
  
    // Wait for the toast notification to appear
    const toastLocator = page.locator('.Toastify__toast');
    await toastLocator.last().waitFor({ state: 'visible' });
  
    // Check that the todo item text is updated
    await expect(page.locator('span.text-truncate')).toHaveText('Updated Todo');
  
    // Check that the toast notification contains the text 'Todo updated!'
    await expect(toastLocator.last()).toHaveText('Todo updated!');
  });

  test('should delete a todo', async ({ page }) => {
    // Add a todo first
    await page.fill('input[placeholder="Add a todo"]', 'Todo to Delete');
    await page.click('button:has(i.fas.fa-plus)');

    // Click the delete button
    await page.click('button:has(i.fas.fa-trash)');
    await page.locator('span.text-truncate').first().waitFor({ state: 'detached' });
    await expect(page.locator('div')).toHaveText('Todo removed!');
  });

  // test('should show a toast notification when adding a todo', async ({ page }) => {
  //   await page.fill('input[placeholder="Add a todo"]', 'Another Todo');
  //   await page.click('button:has(i.fas.fa-plus)');
  //   await expect(page.locator('.Toastify__toast')).toHaveText('Todo added!');
  // });

  // test('should show a toast notification when updating a todo', async ({ page }) => {
  //   // Add a todo first
  //   await page.fill('input[placeholder="Add a todo"]', 'Old Todo');
  //   await page.click('button:has(i.fas.fa-plus)');

  //   // Click the edit button
  //   await page.click('button:has(i.fas.fa-edit)');
  //   await page.fill('input.form-control', 'New Todo');
  //   await page.click('button:has(i.fas.fa-check)');

  //   await expect(page.locator('.Toastify__toast')).toHaveText('Todo updated!');
  // });

  // test('should show a toast notification when deleting a todo', async ({ page }) => {
  //   // Add a todo first
  //   await page.fill('input[placeholder="Add a todo"]', 'Todo to Remove');
  //   await page.click('button:has(i.fas.fa-plus)');

  //   // Click the delete button
  //   await page.click('button:has(i.fas.fa-trash)');

  //   await expect(page.locator('.Toastify__toast')).toHaveText('Todo removed!');
  // });

});
