const connection = require("../config/connection");

const { User } = require("../models");
const { randomUN, randomEmail } = require("./randomName");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});

  const userSeedingArr = [];

  const userNr = 20;

  for (let i = 0; i < userNr; i++) {
    userSeedingArr.push({
      username: randomUN(),
      email: randomEmail(),
    });
  }

  await User.collection.insertMany(userSeedingArr);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(userSeedingArr);
  // console.table(applications);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
