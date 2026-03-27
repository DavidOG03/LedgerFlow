import fs from 'fs';
import path from 'path';

const layoutDir = path.join(process.cwd(), 'src/components/layout');

const files = fs.readdirSync(layoutDir).filter(f => f.endsWith('.jsx') && f !== 'Header.jsx' && f !== 'Footer.jsx' && f !== 'SocialProof.jsx');

files.forEach(file => {
    let content = fs.readFileSync(path.join(layoutDir, file), 'utf8');
    
    let needsSave = false;
    
    // Skip Hero because it has special internal spans we will just fix manually via multi_replace
    if (file === 'Hero.jsx') return;

    if (!content.includes('AnimatedText')) {
        content = content.replace("import React from 'react'", "import React from 'react'\nimport { AnimatedText } from '../ui/AnimatedText'\nimport { AnimatedReveal } from '../ui/AnimatedReveal'");
        needsSave = true;
    }

    // Replace <h2> tags, safely
    const h2Regex = /<h2([^>]*)>([\s\S]*?)<\/h2>/g;
    content = content.replace(h2Regex, (match, attrs, inner) => {
        return `<AnimatedText as="h2"${attrs}>${inner}</AnimatedText>`;
    });

    // Replace <p className="text-text/80..."> tags, carefully
    const pRegex = /<p([^>]*)>([\s\S]*?)<\/p>/g;
    content = content.replace(pRegex, (match, attrs, inner) => {
        // Only wrap main description paragraphs
        if (attrs.includes('text-text/80') || attrs.includes('text-text ') || attrs.includes('text-gray-')) {
            return `<AnimatedReveal as="p"${attrs}>${inner}</AnimatedReveal>`;
        }
        return match;
    });

    if (needsSave) {
        fs.writeFileSync(path.join(layoutDir, file), content, 'utf8');
        console.log(`Updated ${file} with animations`);
    }
});
