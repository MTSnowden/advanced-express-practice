const express = require ('express')
const router = express.Router()
const { vehicles } = require('../data/vehicles')

router.get('/vehicles', (req, res) => {
    res.json(vehicles);
})

router.get('/vehicles/:id', (req, res) => {
    const showVehicles = vehicles.find(v => v._id == req.params.id);
    res.json(showVehicles);
    })

app.post("/vehicles", (req, res) => {
    const addVehicle = req.body
    const counter = vehicles.length+1
    addVehicle._id = counter
    vehicles.push(addVehicle)
    res.json(addVehicle)
})

module.export = router;
