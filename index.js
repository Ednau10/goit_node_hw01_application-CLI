// Importa el módulo contacts.js
const contacts = require('./contacts');

// Ejemplo de uso de las funciones
console.log('Listado de contactos:');
const allContacts = contacts.listContacts();
console.log(allContacts);

console.log('Obtener un contacto por ID:');
const contactById = contacts.getContactById('AeHIrLTr6JkxGE6SN-0Rw');
console.log(contactById);

console.log('Eliminar un contacto por ID:');
contacts.removeContact('AeHIrLTr6JkxGE6SN-0Rw');

console.log('Agregar un nuevo contacto:');
contacts.addContact('Nuevo Contacto', 'nuevo@ejemplo.com', '(123) 456-7890');
