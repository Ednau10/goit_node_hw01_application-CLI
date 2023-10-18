const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts() {
  try {
    const contactsData = fs.readFileSync(contactsPath, 'utf-8');
    const contacts = JSON.parse(contactsData);
    console.log('Listado de contactos:');
    console.table(contacts);
  } catch (error) {
    console.error('Error al listar contactos:', error.message);
  }
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
      if (error) {
          console.log(error);
      }
      const contacts = JSON.parse(data.toString());
      contacts.forEach((contact) => {
          if (contact.id === contactId) {
              console.log(contact);
          }
      });
  });
}

function removeContact(contactId) {
  try {
    const contactsData = fs.readFileSync(contactsPath, 'utf-8');
    let contacts = JSON.parse(contactsData);
    contacts = contacts.filter((c) => c.id !== contactId);
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    console.log(`Contacto con ID ${contactId} eliminado con éxito.`);
  } catch (error) {
    console.error('Error al eliminar contacto por ID:', error.message);
  }
}

function addContact(name, email, phone) {
  try {
    const contactsData = fs.readFileSync(contactsPath, 'utf-8');
    let contacts = JSON.parse(contactsData);
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    console.log('Nuevo contacto agregado con éxito.');
  } catch (error) {
    console.error('Error al agregar nuevo contacto:', error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
