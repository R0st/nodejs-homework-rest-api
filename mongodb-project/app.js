const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const { DB_HOST } = process.env;
// console.log(DB_HOST);
mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
  });
