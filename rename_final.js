const fs = require('fs');
const path = require('path');

const log = (msg) => {
    fs.appendFileSync('rename_log.txt', msg + '\n');
    console.log(msg);
};

const assetsDir = path.join(process.cwd(), 'src', 'assets');
log(`Working in: ${assetsDir}`);

try {
    const files = fs.readdirSync(assetsDir);
    log(`Found ${files.length} files.`);

    const waFiles = files.filter(f => f.startsWith('WhatsApp Image'));
    log(`Found ${waFiles.length} WhatsApp images.`);

    let counter = 1;
    waFiles.forEach(file => {
        const ext = path.extname(file) || '.jpg';
        const newName = `gallery-wa-${counter}${ext}`;
        const oldPath = path.join(assetsDir, file);
        const newPath = path.join(assetsDir, newName);

        try {
            if (fs.existsSync(newPath)) {
                log(`Skipping ${file} -> ${newName} (Target exists)`);
            } else {
                fs.renameSync(oldPath, newPath);
                log(`Renamed: ${file} -> ${newName}`);
            }
        } catch (e) {
            log(`Error renaming ${file}: ${e.message}`);
        }
        counter++;
    });

} catch (e) {
    log(`Fatal Error: ${e.message}`);
}
