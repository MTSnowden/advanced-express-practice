const vehicles = require("../data/vehicles");

const list = (req, res) => {
    return res.json(vehicles);
}

const show = (req, res) => {
    const oneVehicle = vehicles.find(vehicle => vehicle._id == req.params.id)
    return res.json(oneVehicle)}

const create = (req, res) => {
    const addVehicle = req.body
    const counter = vehicles.length+1
    addVehicle._id = counter
    vehicles.push(addVehicle)
    return res.json(addVehicle)
}

module.exports = { list, show, create }