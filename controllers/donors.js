// controllers/donors.js
const Donor = require('../models/donor');


module.exports = function(app) {

    // index
    app.get("/", (req, res) => {
        Donor.find()
            .then(givers => {
                res.render('donators-index', {givers: givers});
            }).catch(err => {
                console.log(err);
            });
    });

    // new
    app.get('/donors/new', (req, res) => {
        res.render('new-donators', {});
    });

    // create
    app.post('/donors', (req, res) => {
        Donor.create(req.body).then((donor) => {
            console.log(donor)
            res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        });
    });
}
