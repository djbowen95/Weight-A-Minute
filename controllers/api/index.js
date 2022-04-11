const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const bankRoutes = require('./bankRoutes')

// Workout Routes, Exercise Routes, History Routes (?)

router.use('/users', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/bank', bankRoutes);

module.exports = router;
