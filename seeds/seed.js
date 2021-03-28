const sequelize = require('../config/connection');
const { User, Blogpost } = require('../models');

const userData = require('./userData.json')
const bpData = require('./blogposts.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogpost of bpData) {
    await Blogpost.create({
      ...blogpost,
      author_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
