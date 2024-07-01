import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // add todo
  await page.getByPlaceholder('Add a todo').click();
  await page.getByPlaceholder('Add a todo').fill('todo 1');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.locator('span')).toContainText('todo 1');

  // add another todo 
  await page.getByPlaceholder('Add a todo').click();
  await page.getByPlaceholder('Add a todo').fill('todo 2');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.locator('#root')).toContainText('todo 2');

  // delete todo 
  await page.locator('#delete-todo-btn-1').click();
  await page.getByRole('button', { name: '' }).click();
  await expect(page.locator('span:has-text("todo 2")')).toBeHidden();

  // edit todo
  await page.locator('#todo-input-0').click();
  await page.locator('#todo-input-0').fill('todo 1 edited');
  await page.getByRole('button', { name: '' }).click();
  await expect(page.locator('span')).toContainText('todo 1 edited');
});