const express = require ('express')
const router = express.Router()
const { contacts } = require('../data/contacts')

router.get('/contacts', (req, res) => {
    res.json(contacts);
})

router.get('/contacts/:id', (req, res) => {
    const showContact = contacts.find(c => c._id == req.params.id);
    res.json(showContact);
})

router.post("/contacts", (req, res) => {
    const addContact = req.body 
    const counter = contacts.length+1
    addContact._id = counter
    // console.log(addContact)
    contacts.push(addContact)
    res.json(addContact)
})

module.export = router; 