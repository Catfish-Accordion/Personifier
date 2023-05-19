const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"],
        maxlength: [30, "First name must be at less than 30 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"],
        maxlength: [30, "Last name must be at less than 30 characters long"]
    },
    email: {
        type: String,
        required: [true, "Slack name is required"],
        minlength: [4, "Slack name must be at least 4 characters long"]
    },
    username: {
        type: String,
        required: [true, "Segment email is required"],
        minlength: [10, "Segment email must be at least 10 characters long"]
    },
    phoneNumber : {
        type: String,
        required: [false, "Phone number is not required"]
    }
}, {timestamps:true});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;