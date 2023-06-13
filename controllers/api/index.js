const router = require("express").Router();
const userRoutes = require("./userRoutes");
const historyRoutes = require("./historyRoutes");
const workoutRoutes = require('./workoutRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/users', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/exercise', exerciseRoutes);
router.use("/history", historyRoutes);

module.exports = router;
