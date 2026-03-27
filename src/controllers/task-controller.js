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
}
