const fs = require('fs/promises');
const path = require('path');   //для нормализации пути

const contactsPath = path.join(__dirname, 'contacts.json'); //делает нормализацию и обьеденение пути

const updateContact = async(contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

module.exports = updateContact;

