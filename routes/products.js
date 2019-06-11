const express = require ('express')
const router = express.Router()
const { list, show, create } = require('../controllers/products')

// path, function
// go to products, perform this function. 
router.get('/products', list)

router.get ('/products/:id', show)

router.post("/products", create)

module.exports = router;