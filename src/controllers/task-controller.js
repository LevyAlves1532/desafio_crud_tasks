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

        return res
            .end(JSON.stringify({
                message: 'Task updated',
                data: task.update(id, {
                    title,
                    description,
                }),
            }));
    }

    static delete(req, res) {
        const { id } = req.params;

        const task = new Task();

        task.delete(id);

        return res
            .writeHead(204)
            .end();
    }
}
