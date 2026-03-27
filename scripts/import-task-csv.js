import fs from 'node:fs';
import csv from 'csv-parser';

const csvPath = new URL('../imports/tasks.csv', import.meta.url);

const results = [];

fs.createReadStream(csvPath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
        for await (const result of results) {
            await fetch('http://localhost:8888/tasks', {
                method: 'POST',
                body: JSON.stringify(result),
                duplex: 'half',
            });         
        }

        console.log(`Imported ${results.length} tasks`);
    });
