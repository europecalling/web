const fs = require('fs');
const path = require('path');

const assetsDir = path.join(process.cwd(), 'src', 'assets');

const renames = [
    { old: '1.-Geghard-Monastery-Armenia (1).jpg', new: 'gallery-armenia.jpg' },
    { old: 'view-barcelona-from-palau-nacional-cloudy-sky-spain (1).jpg', new: 'gallery-barcelona.jpg' },
    { old: 'beautiful-czech-passenger-train-with-carriages (1).jpg', new: 'gallery-czech-train.jpg' },
    { old: 'panoramic-cityscape-view-baku-morning-capital-city-azerbaijan.jpg (1).jpeg', new: 'gallery-baku.jpg' },
    { old: 'kutaisi-georgia-travel-photo-20240912141135261-main-image (1).jpg', new: 'gallery-kutaisi.jpg' },
    { old: 'shaki (1).jpg', new: 'gallery-shaki.jpg' },
    { old: 'gabala (1).jpg', new: 'gallery-gabala.jpg' },
    { old: 'full-shot-couple-walking-with-baggage (1).jpg', new: 'gallery-travelers.jpg' },
    { old: 'chunkurchak-valley-is (1).jpg', new: 'gallery-valley.jpg' },
    { old: 'a1.png', new: 'gallery-client-1.png' },
    { old: 'a2 (1).png', new: 'gallery-client-2.png' },
    { old: 'a3.png', new: 'gallery-client-3.png' },
    { old: 'a4.png', new: 'gallery-client-4.png' }
];

renames.forEach(file => {
    const oldPath = path.join(assetsDir, file.old);
    const newPath = path.join(assetsDir, file.new);

    if (fs.existsSync(oldPath)) {
        try {
            fs.renameSync(oldPath, newPath);
            console.log(`Renamed: ${file.old} -> ${file.new}`);
        } catch (e) {
            console.error(`Error renaming ${file.old}:`, e.message);
        }
    } else {
        console.log(`Skipping (not found): ${file.old}`);
    }
});
