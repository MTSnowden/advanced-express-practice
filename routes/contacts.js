const express = require ('express')
export const routerContacts = express.Router()

routerContacts.get('/contacts/:id', (req, res) => {
    const showContact = contacts.find(c => c._id == req.params.id);
    res.json(showContact);
    })
