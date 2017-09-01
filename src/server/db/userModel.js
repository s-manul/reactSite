const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let userModel;

if (mongoose.models.users) {
    userModel = mongoose.model('users')
} else {
    userModel = mongoose.model('users', userSchema);
}

module.exports = userModel;