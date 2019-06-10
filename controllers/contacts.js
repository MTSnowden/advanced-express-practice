const contacts = require("../data/contacts");

const list = () => {
    return contacts
}

const show = (id) => {
   return contacts.find(c => c._id == req.params.id)
}

const create = (addContact) => {
    const addContact = req.body 
    const counter = contacts.length+1
    addContact._id = counter
    contacts.push(addContact)
    return addContact
}

module.exports = { list, show, create}
