const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const imgRoutes = require('./api/imageRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', imgRoutes);


module.exports = router;

