const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static('./pages'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './pages/siteA.html'));
});

const port = 8010;
app.listen(port, () => {
  console.log('Server stated listening port ', port);
});