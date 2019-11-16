const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let complaintData = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Problem: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Contact: {
        type: Number,
        required: true
    },
    Latitude: {
        type: Number,
        required: true
    },
    Longitude: {
        type: Number,
        required: true
    },
    TimeStamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('complaintData', complaintData);