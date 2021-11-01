const { Contact } = require("../../models");

const getAll = async (req, res) => {
  // console.log(req.query);
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const { _id } = req.user;

  const result = await Contact.find({ owner: _id }, "_id content owner", {
    skip,
    limit: +limit,
  }).populate("owner", "email"); //перечисляем в "" что нужно чтобы пришло без лишних полей

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
