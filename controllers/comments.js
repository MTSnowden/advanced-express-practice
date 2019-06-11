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

// 
const create = (req, res) => {
    const addComment = req.body
    const counter = comments.length+1
    addComment._id = counter
    comments.push(addComment)
    return res.json(addComment)
}

module.exports = { list, show, create } 