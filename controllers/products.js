const products = require("../data/products");

const list = (req, res) => {
    return res.json(products)
}

const show = (req, res) => {
    const oneProduct = products.find(product => product._id == req.params.id)
    return res.json(oneProduct)}

const create = (req, res) => {
    const addProduct = req.body
    const counter = products.length+1
    addProduct._id = counter
    products.push(addProduct)
    return res.json(addProduct)
}

module.exports = { list, show, create }
