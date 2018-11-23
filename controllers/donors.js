// controllers/donors.js
const Donor = require('../models/donor');


module.exports = function(app) {

    // index
    app.get("/", (req, res) => {
        Donor.find()
            .then(givers => {
                res.render('donators-index', {givers: givers});
            })
            .catch(err => {
                console.log(err);
            });
    });
}
