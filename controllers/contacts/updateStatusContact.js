const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const updateStatusContact = async (req, res) => {
  if (req.body.favorite === undefined) {
    res.status(400).json({
      status: "error",
      code: 404,
      message: "Missing field favorite",
    });
    return;
  }
  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateStatusContact;
