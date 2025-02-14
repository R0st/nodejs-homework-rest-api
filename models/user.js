const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    // subscription: {
    //   type: String,
    //   enum: ["starter", "pro", "business"],
    //   default: "starter",
    // },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}; // 2 способ

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}; // 2 способ

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  // subscription: Joi.string().required(),
  // token: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiSchema,
};
