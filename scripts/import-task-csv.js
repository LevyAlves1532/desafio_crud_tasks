import fs from 'node:fs';
import csv from 'csv-parser';

const csvPath = new URL('../imports/tasks.csv', import.meta.url);

fs.createReadStream(csvPath)
    .pipe(csv())
    .on('data', (data) => {
        fetch('http://localhost:8888/tasks', {
            method: 'POST',
            body: data,
            duplex: 'half',
        });
    });
