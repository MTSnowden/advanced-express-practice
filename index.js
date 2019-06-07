const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4001;

app.use(express.static("public"))
app.use(bodyParser.json())

app.listen(port, () => {
 console.log(`Your mom is listening on port ${port}!`);
});
