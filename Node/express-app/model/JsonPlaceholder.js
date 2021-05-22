const mongoose = require('mongoose');

const JsonPlaceholderSchema = new mongoose.Schema({
    id: {
        type: 'string',
        required: true,
        min: 1,
        max:100
    },
    title: {
        type: 'string',
        required: true,
        max: 1000,
        min: 10
    },
    url: {
        type: 'string',
        required: true,
        max: 2000,
        min: 20
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('JsonPlaceholder',JsonPlaceholderSchema);