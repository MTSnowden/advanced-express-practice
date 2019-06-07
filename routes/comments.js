const express = require ('express')
const router = express.Router()
const { comments } = require('../data/comments')

router.get('/comments', (req, res) => {
    res.json(comments);
})

router.get ('/comments/:id', (req, res) => {
    const showComments = comments.find(c => c._id == req.params.id);
    res.json(showComments);
})

app.post("/comments", (req, res) => {
    const addComment = req.body
    const counter = comments.length+1
    addComment._id = counter
    comments.push(addComment)
    res.json(addComment)
})

module.export = router;