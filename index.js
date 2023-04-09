const path = require('path');
const argv = require('commander');
const { getPackageName } = require('./lib/name');
const { readMarkdownFileSync, writeMarkdownFileSync } = require('./lib/file');
const { marked } = require('marked');

argv.option('-n, --name', 'name option')
    .option('-d, --debug', 'debug option')
    .option('-f, --file <file>', 'file option')
    .option('-o, --out <out>', 'out option')
    .parse(process.argv);

const isDebug = argv.opts().debug;

if (argv.opts().name) {
    console.log(getPackageName());
    return;
}

const markdownFilePath = argv.opts().file;
if (markdownFilePath) {
    const markdownFile = readMarkdownFileSync(path.resolve(__dirname, markdownFilePath));
    if (isDebug) {
        console.log('markdown: ');
        console.log(markdownFile);
    }
    const htmlFilePath = argv.opts().out;
    if (htmlFilePath) {
        const html = marked(markdownFile);
        if (isDebug) {
            console.log('html: ');
            console.log(html);
        }
        writeMarkdownFileSync(path.resolve(__dirname, argv.opts().out), html);
    }
}
