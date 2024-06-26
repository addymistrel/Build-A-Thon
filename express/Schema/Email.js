//USer Schema is Defined here
const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
    email:{type:String,unique:true},
    password:{type:String, required:true},
    userType:{type:String},
});

const EmailModel = mongoose.model('Email', EmailSchema);
module.exports=EmailModel;