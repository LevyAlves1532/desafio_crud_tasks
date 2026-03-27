import { HomeController } from "../controllers/home-controller.js";
import { TaskController } from "../controllers/task-controller.js";
import { storeTaskRequest } from "../requests/store-task-request.js";

export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: HomeController.index,
        middlewares: [],
    },
    {
        method: 'GET',
        path: '/tasks',
        handler: TaskController.index,
        middlewares: [],
    },
    {
        method: 'POST',
        path: '/tasks',
        handler: TaskController.store,
        middlewares: [
            storeTaskRequest,
        ],
    }
];
