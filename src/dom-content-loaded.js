const { Router } = require('express');

const router = Router();
router.get('/', (req, res, next) => {
  res.render('dom-content-loaded.liquid');
});

module.exports = router;
