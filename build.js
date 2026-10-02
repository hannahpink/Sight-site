// 배포할 공개 파일만 dist 폴더로 복사합니다.
const fs = require('node:fs');
const path = require('node:path');
const destination = path.join(__dirname, 'dist');
fs.mkdirSync(destination, { recursive: true });
for (const file of ['index.html','style.css','script.js']) fs.copyFileSync(path.join(__dirname,file),path.join(destination,file));
fs.cpSync(path.join(__dirname,'assets'),path.join(destination,'assets'),{recursive:true});
console.log('Static website is ready in dist/');
