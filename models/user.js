const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const UserSchema = new Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:false //you don't have to write this part
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports= User = mongoose.model('users',UserSchema)