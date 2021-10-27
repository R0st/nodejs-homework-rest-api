const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const getById = async (req, res) => {
  const { contactId } = req.params; //сразу считываем его
  //   const contact = await Contact.findOne({ _id: contactId });
  const contact = await Contact.findById(
    contactId,
    "_id name email phone favorite"
  );
  if (!contact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json(contact);
};

module.exports = getById;
