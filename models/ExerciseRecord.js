const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

const ExerciseRecord = sequelize.define(
  "ExerciseRecord",
  {
    // Model attributes are defined here
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      timestamps: true,
    },

    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    unit: {
      type: DataTypes.STRING(2),
    },
  },
  {
    tableName: "exercise_record",
  },{
    var { sequelize } = new Sequelize('sequelize_test', 'root', null, {
        host: "127.0.0.1",
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    });
  }
);
;

// `sequelize.define` also returns the model
console.log(ExerciseRecord === sequelize.models.ExerciseRecord); // true

module.exports = ExerciseRecord;
