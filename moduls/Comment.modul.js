const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const comment = mongoose.model('comment', commentSchema)
module.exports = comment
