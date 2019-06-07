const express = require ('express')
const router = express.Router()
const { products } = require('../data/products')

router.get('/products', (req, res) => {
    res.json(products);
})

router.get ('/products/:id', (req, res) => {
    const showComments = products.find(c => c._id == req.params.id);
    res.json(showComments);
})

app.post("/products", (req, res) => {
    const addComment = req.body
    const counter = products.length+1
    addComment._id = counter
    products.push(addComment)
    res.json(addComment)
})

module.export = router;