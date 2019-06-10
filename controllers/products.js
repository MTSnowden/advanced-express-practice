const products = require("../data/products");

const list = () => {
    return products
}

const show = (id) => {
    return products.find(c => c._id == req.params.id)
}

const create = (addProduct) => {
    const addProduct = req.body
    const counter = products.length+1
    addComment._id = counter
    products.push(addProduct)
    return addProduct
}

module.exports = { list, show, create }
