const User = require('./User');
const WorkoutRecord = require('./WorkoutRecord');

WorkoutRecord.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

// Signup.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(Signup, {
//   foreignKey: 'user_id'
// });

module.exports = { User, WorkoutRecord };