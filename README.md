# Noun.js
A minimal lexer library for js

## Usage
First, create a file called `index.js`:
```js
// Include nounjs
const noun = require('noun');
// create a lexer
const lexer = noun.createLexer({
    // Pretend the data is coming from a file
    file: '<main>',
    text: '5.725'
});
// This can only be called *once*!
const tokens = lexer.make_tokens();
// tokens[1] contains an error if something went wrong. Realistically, you should check for it first!
console.log(tokens[0]);
```
Now create a file called *nounfile.json* in the same directory. This file tells noun.js how to tokenize your text. In this example, I'll only add two simple tokens:
```json
{
    "comment1": "Keywords go here",
    "keywords": [],
    "comment2": "Key is the name of the token, value is a regex used to match it",
    "comment3": "First element has higher precendence",
    "tokens": {
        "FLOAT": "[0-9]+\\.[0-9]+",
        "INT": "[0-9]+"
    }
}
```