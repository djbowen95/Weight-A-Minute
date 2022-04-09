const router = require('express').Router();
const User = require('../../models');
const ExerciseRecord = require('../../models/ExerciseRecord');

router.get('/', async (req, res) => {
    try {
      const exercise_recordData = await history.create();
  console.log("poo")
      req.session.save(() => {
        req.session.exercise_id = exercise_recordData.id;
        req.session.logged_in = true;
  
        res.status(200).json(exercise_recordData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  

  module.exports = router;

