const fs = require('fs');
const path = require('path');

const assetsDir = path.join(process.cwd(), 'src', 'assets');
console.log('Scanning directory:', assetsDir);

try {
    const files = fs.readdirSync(assetsDir);
    console.log(`Found ${files.length} files.`);

    let counter = 1;
    let renamedCount = 0;

    files.forEach(file => {
        if (file.startsWith('WhatsApp Image')) {
            const extension = path.extname(file) || '.jpg';
            const newName = `gallery-wa-${counter}${extension}`;
            const oldPath = path.join(assetsDir, file);
            const newPath = path.join(assetsDir, newName);

            try {
                if (fs.existsSync(newPath)) {
                    console.log(`Target ${newName} already exists, skipping.`);
                } else {
                    fs.renameSync(oldPath, newPath);
                    console.log(`[SUCCESS] Renamed: "${file}" -> "${newName}"`);
                    renamedCount++;
                }
            } catch (e) {
                console.error(`[ERROR] Failed to rename "${file}":`, e.message);
            }
            counter++;
        }
    });

    console.log(`Finished. Renamed ${renamedCount} files.`);

} catch (e) {
    console.error("Fatal error:", e);
}
