import { randomUUID } from 'node:crypto';
import { Task } from '../models/task.js';

export class TaskController {
    static index(req, res) {
        const task = new Task();

        return res.end(JSON.stringify({
            message: 'All taks',
            data: task.all(req.query),
        }));
    }

    static store(req, res) {
        const { title, description } = req.body;

        const task = new Task();

        return res
            .end(JSON.stringify({
                message: 'Task created',
                data: task.create({
                    title,
                    description,
                }),
            }));
    }

    static update(req, res) {
        const { id } = req.params;

        const { title, description } = req.body;

        const task = new Task();

        let findTask = task.find(id);

        if (!findTask) {
            return res
                .writeHead(404)
                .end(JSON.stringify({
                    message: 'Task not found',
                    request: {
                        id,
                    },
                }))
        }

        findTask = task.update(id, {
            title,
            description,
        });

        return res
            .end(JSON.stringify({
                message: 'Task updated',
                data: findTask,
            }));
    }
}
