// const { NotFound } = require("http-errors");

// const { Contact } = require("../../models");

// const getAll = async (req, res, next) => {
//   const contacts = await contactsOperations.listContacts();
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       contacts,
//     },
//   });
// };

// const getById = async (req, res, next) => {
//   const { contactId } = req.params;
//   const contact = await contactsOperations.getContactById(Number(contactId));
//   if (!contact) {
//     throw new NotFound(`Contact with id=${contactId} not found`);
//   }
//   res.json(contact);
// };

// const add = async (req, res) => {
//   const result = await Contact.create(req.body);
//   res.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       result,
//     },
//   });
// };

// const updateById = async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await contactsOperations.updateById(contactId, req.body);
//   if (!result) {
//     throw new NotFound(`Contact with id=${contactId} not found`);
//   }
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       result,
//     },
//   });
// };

// const removeById = async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await contactsOperations.removeContact(Number(contactId));
//   if (!result) {
//     throw new NotFound(`Contact with id=${contactId} not found`);
//   }
//   res.json({
//     status: "success",
//     code: 200,
//     message: "contact deleted",
//   });
// };
// module.exports = {
//   getAll,
//   getById,
// add,
//   updateById,
//   removeById,
// };
