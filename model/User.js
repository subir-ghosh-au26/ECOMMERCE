const mongoose = require('mongoose');
const { isEmail } = require('validator');


const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
        unique: true
    },

    email:{
        type: String,
        require: true,
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },

    password: {
        type: String,
        require: true,
        minlength: [6, 'Minimum password length must be 6 characters']
    },

    isAdmin: {
        type: Boolean,
        default: false
    },


},
{
    timestamps: true
});


module.exports = mongoose.model('User', UserSchema);