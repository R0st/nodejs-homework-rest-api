const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized(`Email ${email} not found`);
  }
  // const isCorrectPassword = bcrypt.compareSync(password, user.password);
  // if (!isCorrectPassword) {
  //   throw new Unauthorized("Password wrong");
  // } //1 способ на сравнения пароля

  // if (!user.comparePassword(password)) {
  //   throw new Unauthorized("Password wrong");
  // } // 2 способ

  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized(`Wrong email or password`);
  }
  const token = "sdfsfsdfsdf.sdfsfsdfsfsdfsdfsdfsdf.DFSDFsdfs";
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
