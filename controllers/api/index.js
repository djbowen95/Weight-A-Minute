const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');

// Workout Routes, Exercise Routes, History Routes (?)

router.use('/users', userRoutes);
router.use('/workout', workoutRoutes);

module.exports = router;
