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


app.listen(port, () => {
 console.log(`Your mom is listening on port ${port}!`);
});

