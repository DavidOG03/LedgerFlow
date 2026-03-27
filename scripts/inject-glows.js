import fs from 'fs';
import path from 'path';

const layoutDir = path.join(process.cwd(), 'src/components/layout');
const files = fs.readdirSync(layoutDir).filter(f => f.endsWith('.jsx') && f !== 'Header.jsx' && f !== 'Footer.jsx' && f !== 'Hero.jsx' && f !== 'SocialProof.jsx');

let glowToggle = 0;
const positions = ['top-left', 'top-right', 'center-left', 'center-right', 'bottom-left'];

files.forEach(file => {
    let content = fs.readFileSync(path.join(layoutDir, file), 'utf8');

    if (!content.includes('AmbientGlow')) {
        content = content.replace("from 'react'", "from 'react'\nimport { AmbientGlow } from '../ui/AmbientGlow'");
        
        // Find the first <section> or container and add relative overflow-hidden if not present
        content = content.replace(/<section className="([^"]*)"/, (match, classes) => {
            let newClasses = classes;
            if (!newClasses.includes('relative')) newClasses += ' relative';
            if (!newClasses.includes('overflow-hidden')) newClasses += ' overflow-hidden';
            return `<section className="${newClasses}"`;
        });

        // Inject AmbientGlow after the first <section> tag
        const pos = positions[glowToggle % positions.length];
        glowToggle++;
        
        content = content.replace(/<section([^>]*)>/, `<section$1>\n      <AmbientGlow position="${pos}" />`);
        fs.writeFileSync(path.join(layoutDir, file), content, 'utf8');
        console.log(`Injected AmbientGlow into ${file}`);
    }
});
