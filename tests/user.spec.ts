import { test, expect } from '@playwright/test';
import signUpPage from '../pages/signUpPage';
import User from '../models/User';
import todoPage from '../pages/todoPage';

test('should be able to regiestration to our application', async ({ page }) => {
  const user = new User();
  const signUp = new signUpPage();
  const todo = new todoPage();
  await signUp.launch(page);
  await signUp.signUp(page, user);
  const welcomeMessage = todo.getWelcomeMessage(page);
  await expect(welcomeMessage).toBeVisible();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
