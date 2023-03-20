#!/usr/bin/env node
const { app } = require('../src/index');

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
