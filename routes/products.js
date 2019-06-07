const express = require ('express')
const router = express.Router()
const { products } = require('../data/products')

router.get('/products', (req, res) => {
    res.json(products);
})

router.get ('/products/:id', (req, res) => {
    const showProducts = products.find(c => c._id == req.params.id);
    res.json(showProducts);
})

router.post("/products", (req, res) => {
    const addProduct = req.body
    const counter = products.length+1
    addComment._id = counter
    products.push(addProduct)
    res.json(addProduct)
})

module.export = router;