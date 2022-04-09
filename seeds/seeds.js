const sequelize = require('../config/connection');
const { User, WorkoutRecord, ExerciseBank, ExerciseRecord } = require('../models');

const userData = require('./userData.json');
const workoutData = require('./workoutData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const workout = await WorkoutRecord.bulkCreate(workoutData);

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

  process.exit(0);
};

seedDatabase();
