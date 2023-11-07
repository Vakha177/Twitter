const mongoose = require('mongoose')

const usersSchema = mongoose.Schema ({
    name: {
        type: String , 
        require: true
    },
    email: {
        type: String , 
        require:true
    }
})

const users = mongoose.model('users', usersSchema)
module.exports=users