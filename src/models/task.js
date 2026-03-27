import { randomUUID } from 'node:crypto';
import { Database } from "./database.js";

const database = new Database();

export class Task {
    #TABLE = 'tasks';

    all(query) {
        const search = (query.search || '').toLowerCase();

        return database.select(this.#TABLE, (tasks) => {
            return tasks.filter(task => 
                task.title.toLowerCase().indexOf(search) > -1 ||
                task.description.toLowerCase().indexOf(search) > -1);
        });
    }

    find(id) {
        const task = database.select(this.#TABLE, tasks => 
            tasks.find(task => task.id === id));
        
        return task;
    }

    create(task) {
        const newTask = { ...task };

        newTask.id = randomUUID();
        newTask.completed_at = null;
        newTask.created_at = new Date().toDateString();
        newTask.updated_at = new Date().toDateString();     

        return database.insert(this.#TABLE, newTask);
    }

    update(id, task) {
        database.update(this.#TABLE, id, {
            ...task,
            updated_at: new Date().toDateString(),
        });

        return this.find(id);
    }

    delete(id) {
        database.delete(this.#TABLE, id);
    }
}
