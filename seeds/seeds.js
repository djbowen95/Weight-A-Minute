const sequelize = require('../config/connection');
const User = require('../models/User');
const { History } = require('../models/History');

const userData = require('./userData.json');
const HistoryData = require('./HistoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  //   for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.fl/oor(Math.random() * users.length)].id,
  //   });
  // }

  
}
  const SeedDatabase = async () => {
  const historyInfo = await History.bulkCreate(HistoryData, {
    individualHooks: true,
    returning: true,
  });
}

seedDatabase()
SeedDatabase();


//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }
