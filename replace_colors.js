const fs = require('fs');
const path = require('path');

function replaceColorsInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColorsInDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const originalContent = content;
      content = content.replace(/bg-\[#0a0a0f\]/g, 'bg-slate-950');
      content = content.replace(/bg-\[#020617\]/g, 'bg-slate-950');
      content = content.replace(/bg-\[#121620\]/g, 'bg-slate-900');
      content = content.replace(/border-\[#0a0a0f\]/g, 'border-slate-950');
      content = content.replace(/text-\[#0a0a0f\]/g, 'text-slate-950');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

replaceColorsInDirectory(path.join(__dirname, 'src'));
console.log('Done!');
