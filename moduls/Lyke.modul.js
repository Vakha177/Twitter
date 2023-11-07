const mongoose = require('mongoose')

const lykeSchema = mongoose.Schema({
   post : {
    type: mongoose.Schema.Types.ObjectId , 
    ref: 'posts'
   } , 
   user: {
    type: mongoose.Schema.Types.ObjectId,
        ref: 'users' 
   }
})
const lyke = mongoose.model('lyke', lykeSchema)
module.exports = lyke
