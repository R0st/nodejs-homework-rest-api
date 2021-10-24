const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Rostyslav:YvCptU38DSL9t39@cluster0.gumtw.mongodb.net/online_shop?retryWrites=true&w=majority  ссылка в mongodb Compass";

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
