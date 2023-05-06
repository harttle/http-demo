const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const app = express();
const engine = new Liquid();

app.set('view engine', 'liquid')
app.set('views', path.join(__dirname, 'views'));
app.engine('liquid', engine.express());

app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.render('index.liquid');
});

app.use('/client-hints', require('./client-hints'));

module.exports = { app };
