const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const exerciseRoutes = require('./exerciseRoutes');

// const historyRoutes = require('./historyRoutes');

router.use('/users', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/exercise', exerciseRoutes);

// router.use('/history', historyRoutes);

module.exports = router;
