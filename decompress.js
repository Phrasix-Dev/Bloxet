const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const unzipFile = path.join(__dirname, 'bloxet-saas-v2.zip');
const outputDir = __dirname;

const unzipStream = fs.createReadStream(unzipFile)
  .pipe(zlib.createUnzip())
  .pipe(fs.createWriteStream(path.join(outputDir, 'bloxet-saas-v2')));

unzipStream.on('finish', () => {
  console.log('File decompressed successfully.');
});

unzipStream.on('error', (err) => {
  console.error('Error during decompression:', err);
});
