const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    eMail: {
        type: String,
        required: true
    },
    message: String,
    date: String
});

let clientModel;

if (mongoose.models.clients) {
    clientModel = mongoose.model('clients')
} else {
    clientModel = mongoose.model('clients', clientSchema);
}

module.exports = clientModel;