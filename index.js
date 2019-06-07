const express = require("express");
const bodyParser = require("body-parser");
const contactsRouter = require("./routes/contacts");
const vehiclesRouter = require("./routes/vehicles");
const commentsRouter = require("./routes/comments");
const productsRouter = require("./routes/products");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static("public"))
app.use(bodyParser.json())

app.use(contactsRouter)
app.use(vehiclesRouter)
app.use(commentsRouter)
app.use(productsRouter)


// app.get('/contacts', (req, res) => res.json(contacts));
// app.get('/vehicles', (req, res) => res.json(vehicles));
// app.get('/comments', (req, res) => res.json(comments));
// app.get('/products', (req, res) => res.json(products));

// ### Create express routes to get one thing

// app.get('/contacts/:id', (req, res) => {
//     const showContact = contacts.find(c => c._id == req.params.id);
//     res.json(showContact);
//     })
// app.get('/vehicles/:id', (req, res) => {
//     const showVehicles = vehicles.find(v => v._id == req.params.id);
//     res.json(showVehicles);
//     })
// app.get('/comments/:id', (req, res) => {
//     const showComments = comments.find(c => c._id == req.params.id);
//     res.json(showComments);
//     })
// app.get('/products/:id', (req, res) => {
//     const showProducts = products.find(p => p._id == req.params.id);
//     res.json(showProducts);
//     })

 // ### Create express routes to create one thing

// app.post("/contacts", (req, res) => {
//     const addContact = req.body 
//     const counter = contacts.length+1
//     addContact._id = counter
//     // console.log(addContact)
//     contacts.push(addContact)
//     res.json(addContact)
// })

// app.post("/vehicles", (req, res) => {
//     const addVehicle = req.body
//     const counter = vehicles.length+1
//     addVehicle._id = counter
//     vehicles.push(addVehicle)
//     res.json(addVehicle)
// })

// app.post("/comments", (req, res) => {
//     const addComment = req.body
//     const counter = comments.length+1
//     addComment._id = counter
//     comments.push(addComment)
//     res.json(addComment)
// })

// app.post("/products", (req, res) =>{
//     const addProduct = req.body
//     const counter = products.length+1 
//     addProduct._id = counter
//     products.push(addProduct)
//     res.json(addProduct)
// })







app.listen(port, () => {
 console.log(`Your mom is listening on port ${port}!`);
});

