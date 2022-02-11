// let the linter complain
// if (true) { console.log("HELLO WORLD!"); console.log("dwaDsa!") }

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.listen(3100, () => {
  console.log('Example app listening on port 3100!');
});

console.log('Hello world!');
