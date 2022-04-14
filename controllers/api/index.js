const router = require("express").Router();
const userRoutes = require("./userRoutes");
const historyRoutes = require("./historyRoutes");
const workoutRoutes = require('./workoutRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const progressRoutes = require('./progressRoutes');

router.use('/users', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/exercise', exerciseRoutes);
router.use("/history", historyRoutes);
router.use('/progress', exerciseRoutes);

module.exports = router;
