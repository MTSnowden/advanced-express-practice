const contacts = require("../data/contacts");

module.exports.list = (req, res) => {
    return res.json(contacts)
}

module.exports.show = (req, res) => {
   const oneContact = contacts.find(contact => contact._id == req.params.id)
   return res.json(oneContact)
}

module.exports.create = (req, res) => {
    const addContact = req.body 
    const counter = contacts.length+1
    addContact._id = counter
    contacts.push(addContact)
    return res.json(addContact)
}
