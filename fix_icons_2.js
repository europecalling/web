import { copyFileSync, unlinkSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

const publicDir = join(process.cwd(), 'public');
const srcLogo = join(process.cwd(), 'src', 'assets', 'logo.png');
const destLogo = join(publicDir, 'logo.png');
const destFavicon = join(publicDir, 'favicon.ico');

console.log('--- DIR LISTING BEFORE ---');
try {
    console.log(readdirSync(publicDir));
} catch (e) { console.error(e); }

try {
    if (existsSync(destFavicon)) {
        console.log('Removing existing favicon.ico');
        unlinkSync(destFavicon);
    }
} catch (e) { console.error('Error removing favicon:', e.message); }

try {
    console.log(`Copying ${srcLogo} to ${destLogo}`);
    copyFileSync(srcLogo, destLogo);
} catch (e) { console.error('Error copying to logo.png:', e.message); }

try {
    console.log(`Copying ${srcLogo} to ${destFavicon}`);
    copyFileSync(srcLogo, destFavicon);
} catch (e) { console.error('Error copying to favicon.ico:', e.message); }

console.log('--- DIR LISTING AFTER ---');
try {
    console.log(readdirSync(publicDir));
} catch (e) { console.error(e); }
