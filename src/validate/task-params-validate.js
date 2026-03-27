import { Task } from "../models/task.js";

export function taskParamsValidate(req, res) {
    const { id } = req.params;

    const task = new Task();

    const findTask = task.find(id);

    if (!findTask) {
        res
            .writeHead(404)
            .end(JSON.stringify({
                message: 'Task not found',
                request: {
                    id,
                },
            }));

        return false;
    }

    return true;
}
