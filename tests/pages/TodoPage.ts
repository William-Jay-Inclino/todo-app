// tests/pages/TodoPage.ts
import { Page } from '@playwright/test';

export class TodoPage {
  constructor(private page: Page) {}

  get inputField() {
    return this.page.locator('input[placeholder="Add a todo"]');
  }

  get addButton() {
    return this.page.locator('button:has-text("Add")');
  }

  get todos() {
    return this.page.locator('span.text-truncate');
  }

  get toastNotification() {
    return this.page.locator('.Toastify__toast');
  }

  async addTodo(todo: string) {
    await this.inputField.fill(todo);
    await this.addButton.click();
  }

  async deleteTodo() {
    await this.page.click('button:has(i.fas.fa-trash)');
  }

  async openEditTodo() {
    await this.page.click('button:has(i.fas.fa-edit)');
  }

  async editTodo() {
    await this.page.click('button:has(i.fas.fa-check)');
  }

}
