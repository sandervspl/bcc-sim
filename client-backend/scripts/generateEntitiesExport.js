const fs = require('fs');

const files = fs.readdirSync('./client-backend/src/entities');
let str = '// This file has been auto generated\n\n';

for (const file of files) {
  if (file.startsWith('index')) {
    continue;
  }

  if (!file.endsWith('.ts')) {
    continue;
  }

  const name = file.split('.')[0];
  str += `export { ${name} } from './${name}';\n`;
}

fs.writeFileSync('./client-backend/src/entities/index.ts', str);
