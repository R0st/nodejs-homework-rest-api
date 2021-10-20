// const fs = require('fs/promises');
// const path = require('path');   //для нормализации пути
// // console.log(__dirname);
// const contactsPath = path.join(__dirname, 'contacts.json'); //делает нормализацию и обьеденение пути

// const listContacts = async () => {
//     const data = await fs.readFile(contactsPath);
//     const contacts = JSON.parse(data);
//     return contacts;
// }

// module.exports = listContacts;

const contacts = require('./contacts.json');
const listContacts = async () => contacts;
module.exports = listContacts;
