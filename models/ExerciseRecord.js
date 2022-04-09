const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

const ExerciseRecord = sequelize.define('ExerciseRecord', {
  // Model attributes are defined here
    user_id: {
    type: DataTypes.STRING,
    allowNull: false
    },
    workout_length: {
    type: DataTypes.STRING
    },
    exercise_id: {
        type: DataTypes.STRING,
    },
    
    // allowNull defaults to true

    workout_date: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(ExerciseRecord === sequelize.models.ExerciseRecord); // true

module.exports = ExerciseRecord