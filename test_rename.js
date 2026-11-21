const fs = require('fs');
const path = require('path');

const target = 'WhatsApp Image 2026-01-20 at 1.55.53 PM.jpeg';
const dest = 'gallery-wa-test.jpeg';
const dir = path.join(process.cwd(), 'src', 'assets');

try {
    const oldPath = path.join(dir, target);
    const newPath = path.join(dir, dest);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log('Success');
    } else {
        console.log('File not found:', oldPath);
    }
} catch (e) {
    console.error(e);
}
