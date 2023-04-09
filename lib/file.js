const fs = require('fs');

exports.readMarkdownFileSync = (file) => {
    return fs.readFileSync(file, { encoding: 'utf-8' });
};

exports.writeMarkdownFileSync = (path, html) => {
    fs.writeFileSync(path, html, { encoding: 'utf-8' });
};
