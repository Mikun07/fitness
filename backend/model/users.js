const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

userSchema = new Schema({

    username : {
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true
    }

}, {timestamps: true});


const User = mongoose.model('User', userSchema);

module.exports = User;