const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ExerciseRecord extends Model {};

ExerciseRecord.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        unit: {
            type: DataTypes.STRING(2),
            allowNull: false,
            validate: {
                isKGorLB(value) {
                    if (value !== "kg" && value !== "lb") {
                        throw new Error("This is not a valid unit");
                    }
                }
            }
        },
        
        
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'ExerciseBank'
        }
    );
    
    module.exports = ExerciseRecord;

    /*
    sets INT NOT NULL, -- Want to be a number 0-5 only (maybe (5))
    exercise_id INT NOT NULL,
    workout_id INT NOT NULL,
    unit VARCHAR(2), -- Either kg or lbs
    reps_1 INT,
    reps_2 INT,
    reps_3 INT,
    reps_4 INT,
    reps_5 INT,
    weight_1 INT,
    weight_2 INT,
    weight_3 INT,
    weight_4 INT,
    weight_5 INT
    */