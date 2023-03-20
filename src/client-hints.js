const { Router } = require('express');

const router = Router();
router.get('/', (req, res, next) => {
  res.set('Accept-CH', 'Viewport-Width, Width');
  res.set('Vary', 'Viewport-Width, Width');
  res.render('client-hints.liquid');
});

module.exports = router;
