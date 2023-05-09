const express = require('express');
const app = express();
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/visits', (req, res) => {
  counter++;
  res.send(`There have been ${counter} visits to this session`);
});

app.get('/rock', (req, res) => {
  // ...
});

app.get('/paper', (req, res) => {
  // ...
});

app.get('/scissors', (req, res) => {
  // ...
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
