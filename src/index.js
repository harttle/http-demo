const express = require('express');
const { readFileSync } = require('fs');
const { Liquid } = require('liquidjs');
const marked = require('marked');
const path = require('path');
const { localURL } = require('./config');
const app = express();
const engine = new Liquid();

app.set('view engine', 'liquid')
app.set('views', path.join(__dirname, 'views'));
app.engine('liquid', engine.express());

app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  const md = readFileSync(path.join(__dirname, '../README.md'), 'utf8');
  const content = marked.parse(md.replace(/https:\/\/web.harttle.com/g, localURL));
  res.render('index.liquid', { content });
});

app.use('/client-hints', require('./client-hints'));
app.use('/dom-content-loaded', require('./dom-content-loaded'));

module.exports = { app };
