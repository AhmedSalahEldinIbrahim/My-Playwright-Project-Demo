import { APIRequestContext, request } from "@playwright/test";
import User from "../models/User";

export default class TodoApi{

    async newTodo(request : APIRequestContext, user : User){
        return await request.post('/api/v1/tasks',{
            data:{
                isCompleted : false,
                item : 'Create New Project',
            },
            headers:{
                Authorization :`Bearer ${user.getAccessToken()}`,
            }
           });
       
    }
}