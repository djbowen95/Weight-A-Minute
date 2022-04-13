const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ExerciseBank extends Model {};

ExerciseBank.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        exerciseName: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
            // Want this to be unique - not sure if to do here or when calling the model.
            // Want this to be drawn from with a form autocomplete.
        },
        icon: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
                // 1 - Chest, 2 - Back, 3 - Legs, 4 - Arms, 5 - Abs/Core - 6 - Glutes
            }
            // Need to build a library of simple icons.
            // Want this to update / refresh when an icon is clicked. 
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ExerciseBank'
    }
);

module.exports = ExerciseBank;
