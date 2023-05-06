const { Router } = require('express');

const router = Router();
router.get('/', (req, res, next) => {
    res.set('Accept-CH', 'Sec-CH-Viewport-Width');
    res.set('Vary', 'Sec-CH-Viewport-Width');
    res.render('client-hints.liquid', {
        requestHeaders: req.headers,
        responseHeaders: res.getHeaders()
    });
});

module.exports = router;
