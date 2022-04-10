const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socialMedia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
