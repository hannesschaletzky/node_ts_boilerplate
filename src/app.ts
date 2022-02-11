// let the linter complain
// if (true) { console.log("HELLO WORLD!"); console.log("dwaDsa!") }
import express from 'express';
import 'dotenv/config';

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
