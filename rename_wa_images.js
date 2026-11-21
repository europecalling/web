const fs = require('fs');
const path = require('path');

const assetsDir = path.join(process.cwd(), 'src', 'assets');
const files = fs.readdirSync(assetsDir);

let counter = 1;

files.forEach(file => {
    if (file.startsWith('WhatsApp Image') && (file.endsWith('.jpeg') || file.endsWith('.jpg'))) {
        const extension = path.extname(file);
        const newName = `gallery-wa-${counter}${extension}`;
        const oldPath = path.join(assetsDir, file);
        const newPath = path.join(assetsDir, newName);

        try {
            fs.renameSync(oldPath, newPath);
            console.log(`Renamed: ${file} -> ${newName}`);
            counter++;
        } catch (e) {
            console.error(`Error renaming ${file}:`, e.message);
        }
    }
});
