const router = require('express').Router();
const userRoutes = require('./userRoutes');

// Workout Routes, Exercise Routes, History Routes (?)

router.use('/users', userRoutes);

module.exports = router;
