let mongoose = require('mongoose');

let firendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    country:
    {
        type: String,
        required: 'Country cannot be blank'
    },
    created_date:
    {
        type: Date,
        default: Date.now
    }
});

let Friend = mongoose.model('Bondhu', firendSchema);
module.exports = Friend;