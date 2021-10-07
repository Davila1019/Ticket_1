const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    user:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required: true
    }
})



module.exports = model('users',userSchema)

