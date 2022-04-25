const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const {  } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  //

  console.table();
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
