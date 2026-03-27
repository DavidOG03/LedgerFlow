import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Using RegExp for accurate replacing
    content = content.replace(/text-white/g, 'text-text-h');
    content = content.replace(/text-gray-300/g, 'text-text');
    content = content.replace(/text-gray-400/g, 'text-text\/80');
    content = content.replace(/text-gray-500/g, 'text-text\/60');
    content = content.replace(/bg-\[#16171d\]/g, 'bg-bg');
    content = content.replace(/bg-\[#0A0A0A\]/g, 'bg-bg');
    content = content.replace(/bg-\[#181920\]/g, 'bg-card');
    content = content.replace(/bg-\[#1c1d24\]/g, 'bg-card-alt');
    content = content.replace(/bg-\[#2e303a\]/g, 'bg-border');
    content = content.replace(/border-\[#2e303a\]/g, 'border-border');
    content = content.replace(/border-\[#3a3d4a\]/g, 'border-border\/80');
    content = content.replace(/border-white\\\/5/g, 'border-border\/50');
    content = content.replace(/border-white\/5/g, 'border-border\/50');
    content = content.replace(/bg-white/g, 'bg-text-h');
    content = content.replace(/text-black/g, 'text-bg');

    if (content !== fs.readFileSync(file, 'utf8')) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
