import { copyFileSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const srcLogo = join(process.cwd(), 'src', 'assets', 'logo.png');
const destLogo = join(process.cwd(), 'public', 'logo.png');
const oldFavicon = join(process.cwd(), 'public', 'favicon.ico');

console.log('Starting icon fix...');

try {
    if (existsSync(oldFavicon)) {
        console.log('Removing old favicon.ico...');
        unlinkSync(oldFavicon);
    } else {
        console.log('No favicon.ico found to remove.');
    }
} catch (e) {
    console.error('Error removing favicon.ico:', e.message);
}

try {
    console.log(`Copying ${srcLogo} to ${destLogo}...`);
    copyFileSync(srcLogo, destLogo);
    console.log('Copy successful.');
} catch (e) {
    console.error('Error copying logo:', e.message);
}
