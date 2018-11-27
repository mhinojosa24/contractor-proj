// controllers/donors.js
const Donor = require('../models/donor');


module.exports = function(app) {

    // index
    app.get("/", (req, res) => {
        Donor.find()
            .then(givers => {
                res.render('all-donators', {givers: givers});
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
            res.redirect(`/donors/${donor._id}`);
        }).catch((err) => {
            console.log(err.message);
        });
    });

    // show
    app.get('/donors/:id', (req, res) => {
        Donor.findById(req.params.id).then((donor) => {
            res.render('show-donators', {donor: donor});
        }).catch((err) => {
            console.log(err.message);
        });
    });
}
