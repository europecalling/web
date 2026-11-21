
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust path to assets - assuming script is in e:/europe-bound-design/scripts/
const assetsDir = path.resolve(__dirname, '../src/assets');

console.log(`Scanning directory: ${assetsDir}`);

if (!fs.existsSync(assetsDir)) {
    console.error(`Directory not found: ${assetsDir}`);
    process.exit(1);
}

const files = fs.readdirSync(assetsDir);

// Match the massive files we identified
const patterns = [
    /^destination-.*\.png$/i,          // destination-georgia.png, etc.
    /^a\d.*\.png$/i,                   // a1.png, a2 (1).png, etc.
    /^CODO.*\.png$/i                   // CODO 5 THEME POSTERS...
];

async function processImages() {
    let count = 0;
    for (const file of files) {
        // specific check for the files we know are huge
        if (patterns.some(regex => regex.test(file))) {
            const inputPath = path.join(assetsDir, file);
            const outputPath = path.join(assetsDir, file.replace(/\.png$/i, '.webp'));

            // Skip if webp already exists (optional, but good for retries)
            // if (fs.existsSync(outputPath)) continue;

            const stats = fs.statSync(inputPath);
            const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

            console.log(`Compressing ${file} (${sizeMB} MB)...`);

            try {
                await sharp(inputPath)
                    .webp({ quality: 75, effort: 4 }) // Effort 4 is balanced speed/compression
                    .toFile(outputPath);

                const newStats = fs.statSync(outputPath);
                const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
                console.log(`✅ Created ${path.basename(outputPath)} (${newSizeMB} MB)`);
                count++;
            } catch (err) {
                console.error(`❌ Error converting ${file}:`, err);
            }
        }
    }
    console.log(`\n🎉 Finished! Compressed ${count} images.`);
}

processImages();
