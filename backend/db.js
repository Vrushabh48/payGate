import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength:6
    },
    firstname: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model('User', userschema);

module.exports = {
    User
}