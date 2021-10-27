const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const result = await Contact.find({}, "_id name email phone favorite"); //перечисляем в "" что нужно чтобы пришло без лишних полей
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
