const connection = require("../config/connection");

const { User, Thought } = require("../models");
const { randomUN, randomEmail } = require("./randomName");
const { randomText } = require("./lipsum");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});

  const userSeedingArr = [];
  const thoughtSeedingArr = [];

  const userNr = 20;
  const thoughtNr = 40;

  for (let i = 0; i < userNr; i++) {
    userSeedingArr.push({
      username: randomUN(),
      email: randomEmail(),
    });
  }
  await User.collection.insertMany(userSeedingArr);

  const userArr = await User.find();
  const userIdArr = userArr.map((singleUser) => singleUser._id.valueOf());

  for (let i = 0; i < thoughtNr; i++) {
    thoughtSeedingArr.push({
      text: randomText(),
      userId: userIdArr[Math.floor(Math.random() * userIdArr.length)],
    });
  }
  console.log(thoughtSeedingArr);
  await Thought.collection.insertMany(thoughtSeedingArr);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
