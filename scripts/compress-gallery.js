
import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');
const TARGET_WIDTH = 1600;
const QUALITY = 85;

async function compressImages() {
    fs.writeFileSync('compression.log', `Scanning ${ASSETS_DIR} for WhatsApp images...\n`);
    console.log("Starting compression...");

    if (!fs.existsSync(ASSETS_DIR)) {
        fs.appendFileSync('compression.log', 'Assets directory not found!\n');
        return;
    }

    const files = fs.readdirSync(ASSETS_DIR);
    const targetFiles = files.filter(f => f.startsWith('WhatsApp Image') && (f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg')));

    if (targetFiles.length === 0) {
        fs.appendFileSync('compression.log', 'No matching images found.\n');
        return;
    }

    fs.appendFileSync('compression.log', `Found ${targetFiles.length} images.\n`);

    let processedCount = 0;

    for (const file of targetFiles) {
        const filePath = path.join(ASSETS_DIR, file);
        const originalSize = fs.statSync(filePath).size;

        try {
            const image = await Jimp.read(filePath);

            // Resize if needed
            if (image.bitmap.width > TARGET_WIDTH) {
                image.resize({ w: TARGET_WIDTH });
            }

            const buffer = await image.getBuffer('image/jpeg', { quality: QUALITY });

            if (buffer.length < originalSize) {
                fs.writeFileSync(filePath, buffer);
                const saved = originalSize - buffer.length;
                fs.appendFileSync('compression.log', `[✔] ${file}: Saved ${(saved / 1024).toFixed(2)} KB\n`);
            } else {
                fs.appendFileSync('compression.log', `[=] ${file}: No saving possible\n`);
            }

            processedCount++;

        } catch (err) {
            fs.appendFileSync('compression.log', `[X] Error ${file}: ${err.message}\n`);
        }
    }

    fs.appendFileSync('compression.log', `Done. Processed ${processedCount}\n`);
    console.log("Done.");
}

compressImages().catch(err => console.error(err));
