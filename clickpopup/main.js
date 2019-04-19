const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.resolve(__dirname, './canvas')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './terrific_pointer/index.html'));
});
app.get('/blank', (req, res) => {
  res.sendFile(path.resolve(__dirname, './canvas/index.html'));
});


const port = 8888;
app.listen(port, () => {
  console.log('Server stated listening port ', port);
});