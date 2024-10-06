import { Page } from "@playwright/test";
import User from "../models/User";

export default class signUpPage {

    private get firtsNameLocator() {
        return '[data-testid=first-name]';
    }

    private get LastNameLocator() {
        return '[data-testid=last-name]';
    }
    private get emailLocator() {
        return '[data-testid=email]';
    }
    private get passwordNameLocator() {
        return '[data-testid=password]';
    }
    private get confirmPasswordLocator() {
        return '[data-testid=confirm-password]';
    }
    private get submitButtonLocator() {
        return '[data-testid=submit]';
    }


    async launch(page: Page) {
        await page.goto('/signup');
    }
    async signUp(page: Page, user: User) {
        await page.type(this.firtsNameLocator, user.getFirstName());
        await page.type(this.LastNameLocator, user.getLastName());
        await page.type(this.emailLocator, user.getEmail());
        await page.type(this.passwordNameLocator, user.getPassword());
        await page.type(this.confirmPasswordLocator, user.getPassword());
        await page.click(this.submitButtonLocator);
    }

}