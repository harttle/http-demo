const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const app = express();
const engine = new Liquid();

app.set('view engine', 'liquid')
app.engine('liquid', engine.express());
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index.liquid');
});

app.use('/client-hints', require('./client-hints'));

module.exports = { app };
