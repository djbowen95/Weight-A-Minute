const router = require('express').Router();
const { ExerciseBank } = require('../../models');
const withAuth = require('../../utils/auth');

// POST Request
// Make exercise name all caps
// Check if exercise already exists

// Get the id of a workout.
router.post('/', async (req, res) => {
    try {
        // Make the exercise name All Caps
        const newExerciseName = req.body.exerciseName.toUpperCase();
        // Check database for exercise, create new if doesn't exist.
        const [row, created] = await ExerciseBank.findOrCreate({
            where: {exerciseName: newExerciseName},
            defaults: {
                icon: req.body.icon
            }
        });        
        // Console log the exercise id, as needed for the next post. 
        console.log(row.id);
        res.status(200).json(`${newExerciseName} id: ${row.id}`);
    } catch (err) {
        res.status(400).json(err);
    }
});
// GET Request
// If it does, return that exercise bank id
// If not, create / post a new exercise bank record
// usinG findOrCreate

module.exports = router;