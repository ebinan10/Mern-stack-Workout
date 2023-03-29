const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const UserSchema =mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    resetToken:String,
    resetTokenExpiration:Date
}, {timestamp:true}
);

module.exports = mongoose.model('User',UserSchema)