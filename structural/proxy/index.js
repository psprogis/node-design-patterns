const path = require('path');
const nativeFs = require('fs');
const FsProxy = require('./FsProxy');

const fs = new FsProxy(nativeFs);

const txtFile = path.join(__dirname, 'Readme.txt');
const mdFile = path.join(__dirname, 'Readme.md');

const result = (error, contents) => {

    if (error) {
        console.log('\x07');  // add sound
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

// fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
