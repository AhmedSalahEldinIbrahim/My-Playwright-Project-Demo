import { Page } from "@playwright/test";

export default class todoPage {
    private get welcomeMessageLocator() {
        return '[data-testid=welcome]';
    }
    private get addTodoButton() {
        return '[data-testid=add]';
    }
    private get newTaskField() {
        return '[data-testid=new-todo]';
    }
    private get submitnewTaskButton() {
        return '[data-testid=submit-newTask]';
    }
    private get successfulMessage() {
        return '[data-testid=todo-item]';
    }
    private get deleteButton() {
        return '[data-testid=delete]';
    }
    getWelcomeMessage(page: Page) {
        return page.locator(this.welcomeMessageLocator);
    }
    getSuccessfulMessage(page: Page) {
        return page.locator(this.successfulMessage);
    }

    async createToDoItem(page: Page) {
        await page.locator(this.addTodoButton).click();
        await page.type(this.newTaskField, "Create New Project");

    }
    async clickOnsubmitnewTaskButton(page: Page) {
        await page.click(this.submitnewTaskButton);
    }
    async clickOnDeleteButton(page: Page) {
        await page.click(this.deleteButton);
    }

}
