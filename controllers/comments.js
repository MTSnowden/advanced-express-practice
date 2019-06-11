const comments = require("../data/comments");

// return the json 
const list = (req, res) => {
    return res.json(comments);
}

// search the comments and match the requested id with the one that 
// matches in the json file
// return that element
const show = (req, res) => {
    const oneComment = comments.find(comment => comment._id == req.params.id)
    return res.json(oneComment)
}

// create variable addComment which requests information from the body
// counter keeps track of the length of the comments 
// _id is the primary key on elements in a collection
// we're setting the counter to the id count of each element in the json body
// then pushing the new comment onto the comments array and 
// returning that array
const create = (req, res) => {
    const addComment = req.body
    const counter = comments.length+1
    addComment._id = counter
    comments.push(addComment)
    return res.json(addComment)
}

// all of these are exported to the router. 
module.exports = { list, show, create } 