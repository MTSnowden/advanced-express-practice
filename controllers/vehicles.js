const vehicles = require("../data/vehicles");

const list = () => {
    return vehicles
}

const show = (id) => {
    return vehicles.find(v => v._id == req.params.id)
}

const create = (addVehicle) => {
    const addVehicle = req.body
    const counter = vehicles.length+1
    addVehicle._id = counter
    vehicles.push(addVehicle)
    return addVehicle
}

module.exports = { list, show, create }