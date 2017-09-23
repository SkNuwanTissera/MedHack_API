const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
    },
    age:{
        type:Number
    },
    height:{
        type:Number
    },
    weight:{
        type:Number
    },
    email: {
        type: String,

    },
    userType: {
        type: String,

    },
    hospital: {
        type: String
    },
    bloodGroup:{
        type: String
    }
    //     type: Date,
    //     required: true
    // },
    //
    // ranking: {
    //     type: Number,
    //     unique: true,
    //     required: true
    // },

});

const User = mongoose.model('User', UserSchema);

module.exports = User;