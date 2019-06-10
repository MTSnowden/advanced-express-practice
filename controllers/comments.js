const comments = require("../data/comments");

const list = () => {
    return comments
}

const show = (id) => {
    return comments.find(c => c._id == req.params.id)
}

const create = (addComment) => {
    const addComment = req.body
    const counter = comments.length+1
    addComment._id = counter
    comments.push(addComment)
    return addComment
}

module.export = { list, show, create} 