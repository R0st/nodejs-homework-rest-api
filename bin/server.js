const mongoose = require("mongoose");
require("dotenv").config();

const app = require("../app");
// console.log(process.env);
// const PORT = process.env.PORT || 3000
const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Server 3000 working"), app.listen(PORT);
  })

  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
