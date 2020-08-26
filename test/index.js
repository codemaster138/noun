const noun = require('../index');
const lex = noun.createLexer({
    file: '<main>',
    text: '5.72'
});
console.log(lex.make_tokens())