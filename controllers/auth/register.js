const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
// const bcrypt = require("bcryptjs");
const { User } = require("../../models");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Already registered");
    // req.status(409).json({
    //   status: "error",
    //   code: 409,
    //   message: "Already register",
    // });
    // return;
  }
  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, avatarURL });
  //  newUser={email}
  newUser.setPassword(password);
  //  newUser={email,password}  //2 способ
  await newUser.save(); //сохраняется в базу
  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // await User.create({ email, password: hashPassword });  //1 способ

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Register success",
  });
};

module.exports = register;
