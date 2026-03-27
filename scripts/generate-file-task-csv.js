import fs from 'node:fs/promises';

let body = `title,description\n`;

for (let x = 1;x<=5;x++) {
    body += `Task ${x},Description Task ${x}\n`;
}

const csvPath = new URL('../imports/tasks.csv', import.meta.url);
const csvFolderPath = new URL('../imports', import.meta.url);

validFolderOrCreate();

function validFolderOrCreate() {
    fs.readdir(csvFolderPath)
        .then(() => createFileCSV())
        .catch(() => {
            fs.mkdir(csvFolderPath);

            createFileCSV();
        });
}

function createFileCSV() {
    fs.writeFile(csvPath, body, 'utf8')
        .then(() => {
            console.info('Created file csv');
        })
        .catch((err) => {
            console.error('Error: ' + err);
        });
}
