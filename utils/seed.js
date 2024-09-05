const connection = require('../config/connection');
const { User ,Friend } = require('../models');
const { getRandomName, getRandomUser } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('User');
    }

    let friendsCheck = await connection.db.listCollections({ name: 'friends' }).toArray();
    if (friendsCheck.length) {
      await connection.dropCollection('friends');
    }


  // Create empty array to hold the students
  const friends = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const RandomUser = getRandomUser(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    
    friends.push({
      first,
      last,
      
    });
  }

  // Add students to the collection and await the results
  const userData = await User.create(user);

  // Add courses to the collection and await the results
  await User.create({
    userName: 'UCLA',
    inPerson: false,
    user: [...userData.map(({_id}) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(friends);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
