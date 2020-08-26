const fs = require('fs');
const Lexer = require('./lexer');
const path = require('path');

module.exports = {
    createLexer(options) {
        const nounFile = options.nounFile || 'nounfile.json';
        if (!fs.existsSync(nounFile)) {
            throw Error('File not found: ', nounFile);
        }
        const data = JSON.parse(fs.readFileSync(nounFile));
        if (!data.tokens) throw 'Missing field "tokens" in nounfile';
        if (!data.keywords) throw 'Missing field "keywords" in nounfile'
        const lexerOptions = {
            toks: data.tokens,
            keywords: data.keywords,
            fn: options.file
        }
        const lexer = new Lexer(lexerOptions, options.text)
        return lexer;
    }
}