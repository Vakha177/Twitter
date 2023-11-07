const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        default: 0,
        immutable: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const post = mongoose.model('post', postSchema)
module.exports = post