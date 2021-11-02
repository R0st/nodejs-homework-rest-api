const { User } = require("../../models");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.json({
    status: "success",
    code: 204,
    message: "Logout success repeat",
  });
};

module.exports = logout;
