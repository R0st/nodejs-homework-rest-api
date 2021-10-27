const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const { DB_HOST } = process.env;
// console.log(DB_HOST);

const { Schema, model } = mongoose;
const productSchema = Schema({
  name: String,
  price: Number,
});
const Product = model("product", productSchema);
// const contactSchema = Schema({
//   name: {
//     type: String,
//     required: [true, "Set name for contact"],
//   },
//   email: {
//     type: String,
//   },
//   phone: {
//     type: String,
//   },
//   favorite: {
//     type: Boolean,
//     default: false,
//   },
// });
// const Contact = model("contact", contactSchema);

const newProduct = {
  name: "iPhone 12",
  price: 18000,
};

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    try {
      const result = await Product.create(newProduct);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
    // console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
  });
