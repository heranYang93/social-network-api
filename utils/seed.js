const connection = require("../config/connection");
const Mongoose = require("mongoose");

const { User, Thought } = require("../models");
const { randomUser } = require("./randomName");
const { randomText } = require("./lipsum");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});
  await Thought.deleteMany({});

  const userSeedingArr = [];

  const userNr = 20;

  for (let i = 0; i < userNr; i++) {
    userSeedingArr.push(randomUser());
  }

  await User.collection.insertMany(userSeedingArr);

  console.info("Seeding complete! 🌱");

  process.exit(0);
});
