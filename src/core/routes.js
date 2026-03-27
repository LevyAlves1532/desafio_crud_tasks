import { HomeController } from "../controllers/home-controller.js";
import { TaskController } from "../controllers/task-controller.js";
import { taskBodyValidate } from "../validate/task-body-validate.js";
import { taskParamsValidate } from "../validate/task-params-validate.js";

export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: HomeController.index,
        validates: [],
    },
    {
        method: 'GET',
        path: '/tasks',
        handler: TaskController.index,
        validates: [],
    },
    {
        method: 'POST',
        path: '/tasks',
        handler: TaskController.store,
        validates: [
            taskBodyValidate,
        ],
    },
    {
        method: 'PUT',
        path: '/tasks/:id',
        handler: TaskController.update,
        validates: [
            taskBodyValidate,
            taskParamsValidate,
        ],
    },
    {
        method: 'DELETE',
        path: '/tasks/:id',
        handler: TaskController.delete,
        validates: [
            taskParamsValidate,
        ],
    }
];
