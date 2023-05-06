#!/usr/bin/env node
const { app } = require('../src/index');
const { port } = require('../src/config');

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
