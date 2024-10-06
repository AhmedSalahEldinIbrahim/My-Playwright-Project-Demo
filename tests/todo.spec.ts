import { test, expect } from '@playwright/test';
import { request } from 'node:http';
import { describe } from 'node:test';
import User from '../models/User';
import UserApi from '../apis/UserApi';
import TodoApi from '../apis/TodoApi';
import signUpPage from '../pages/signUpPage';
import todoPage from '../pages/todoPage';


test.describe('E2E Senario to Regestration user,add and delete todo ', () => {
     test('should be able to add new todo', async ({ page, request, context }) => {
        const user = new User();
        const signUp = new signUpPage();
        signUp.launch(page);
        signUp.signUp(page, user);
        const todo = new todoPage();
        todo.createToDoItem(page);
        todo.clickOnsubmitnewTaskButton(page);
        const todoItem = todo.getSuccessfulMessage(page);
        expect(await todoItem.innerText()).toEqual("Create New Project");
        //     const response =await new UserApi().signUp(request,user)
        //     const responseBody = await response.json();
        //    const accessToken= responseBody.access_token;
        //    const name= responseBody.firstName;
        //    const userID= responseBody.userID;

        //    await context.addCookies([
        //     {
        //         name:"access_token",
        //         value:accessToken,
        //         url:"https://qacart-todo.herokuapp.com/"
        //     },
        //     {
        //         name:"firstName",
        //         value:name,
        //         url:"https://qacart-todo.herokuapp.com/"
        //     },
        //     {
        //         name:"userID",
        //         value:userID,
        //         url:"https://qacart-todo.herokuapp.com/"
        //     }

        //    ]);



        //   await page.goto('/todo');
        //   await page.type('[data-testid=first-name]',"QACart");
        //   await page.type('[data-testid=last-name]',"Awesome");
        //   await page.type('[data-testid=email]',"test2@example.com");
        //   await page.type('[data-testid=password]',"Test@1234");
        //   await page.type('[data-testid=confirm-password]',"Test@1234");
        //   await page.click('[data-testid=submit]');
        //   const welcomeMessage = page.locator('[data-testid=welcome]');
        //   await expect(welcomeMessage).toBeVisible();

        //   await page.type('[data-testid=new-todo]',"Create New Project");
        //   await page.click('[data-testid=submit-newTask]');
    });


    test('should be able to delete a todo', async ({ page, request, context }) => {
        const user = new User();
        const signUp = new signUpPage();
        signUp.launch(page);
        signUp.signUp(page, user);
        const todo = new todoPage();
        todo.createToDoItem(page);
        todo.clickOnsubmitnewTaskButton(page);
        await todo.clickOnDeleteButton(page);
        const noTodos = todo.getWelcomeMessage(page);
        expect(noTodos).toBeVisible();
        // const response = await new UserApi().signUp(request, user)

        // const responseBody = await response.json();
        // const accessToken = responseBody.access_token;
        // const name = responseBody.firstName;
        // const userID = responseBody.userID;
        // user.setAccessToken(accessToken);
        // user.setUserID(userID);

        // await context.addCookies([
        //     {
        //         name: 'access_token',
        //         value: accessToken,
        //         url: 'https://qacart-todo.herokuapp.com/'
        //     },
        //     {
        //         name: 'firstName',
        //         value: name,
        //         url: 'https://qacart-todo.herokuapp.com/'
        //     },
        //     {
        //         name: 'userID',
        //         value: userID,
        //         url: 'https://qacart-todo.herokuapp.com/'
        //     }

        // ]);
        // await new TodoApi().newTodo(request, user)

        // await page.goto('/todo');

        // await page.type('[data-testid=first-name]',"QACart");
        //     await page.type('[data-testid=last-name]',"Awesome");
        //     await page.type('[data-testid=email]',"test3@example.com");
        //     await page.type('[data-testid=password]',"Test@1234");
        //     await page.type('[data-testid=confirm-password]',"Test@1234");
        //     await page.click('[data-testid=submit]');
        //     const welcomeMessage = page.locator('[data-testid=welcome]');
        //     await expect(welcomeMessage).toBeVisible();
        //     await page.click('[data-testid=add]');
        //     await page.type('[data-testid=new-todo]',"Create New Project");
        //     await page.click('[data-testid=submit-newTask]');
        //     const todoItem =  page.locator('[data-testid=todo-item]');
        //    expect(await todoItem.innerText()).toEqual("Create New Project");

    });

})
