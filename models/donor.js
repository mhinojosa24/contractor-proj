// models/donors.js

const mongoose = require('mongoose');


const Donor = mongoose.model('Donors', {
    companyName: String,
    amount: String,
    description: String
});

module.exports = Donor;
