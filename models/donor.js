// models/donors.js

const mongoose = require('mongoose');


const Donor = mongoose.model('Donor', {
    companyName: String,
    amount: Number,
    description: String
});

module.exports = Donor;
