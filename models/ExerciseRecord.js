const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

const ExerciseRecord = sequelize.define("ExerciseRecord", {
  // Model attributes are defined here
  exercise_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    timestamps: true,
  },
  sets: {
    type: DataTypes.INTEGER,
    allowNull: false,
    timestamps: true,
  },
  exercise_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    timestamps: true,
  },
  workout_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    timestamps: true,
  },
  unit: {
    type: DataTypes.STRING(2),
    timestamps: true,
  },
});

// `sequelize.define` also returns the model
console.log(ExerciseRecord === sequelize.models.ExerciseRecord); // true

module.exports = ExerciseRecord;
