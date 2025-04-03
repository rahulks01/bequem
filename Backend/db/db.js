const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_URL_LOCAL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => console.log(err));
}

module.exports = connectToDb;
