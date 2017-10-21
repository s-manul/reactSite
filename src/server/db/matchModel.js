const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matychSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    match: {
        type: String,
        required: true
    },
    bet: {
        type: String,
        required: true
    },
    ratio: {
        type: Number,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    result: {
        type: Boolean,
        required: true
    }
});

let matchModel;

if (mongoose.models.matches) {
    matchModel = mongoose.model('matches')
} else {
    matchModel = mongoose.model('matches', matychSchema);
}

module.exports = matchModel;