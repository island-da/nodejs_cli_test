const path = require('path');
const { readMarkdownFileSync } = require('./file');

test('readMarkdownFileSync', () => {
    const markdownFile = readMarkdownFileSync(path.resolve(__dirname, '../fixtures/test.md'));
    expect(markdownFile).toBe('**bold**');
});
