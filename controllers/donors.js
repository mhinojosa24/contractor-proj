// controllers/donors.js
const Donor = require('../models/donor');


module.exports = function(app) {

    // index
    app.get("/", (req, res) => {
        Donor.find()
            .then(donators => {
                res.render('all-donators', {donators: donators});
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
        Donor.create(req.body).then((donators) => {
            console.log(donators)
            res.redirect(`/donors/${donor._id}`);
        }).catch((err) => {
            console.log(err.message);
        });
    });

    // show
    app.get('/donors/:id', (req, res) => {
        Donor.findById(req.params.id).then((donators) => {
            res.render('show-donators', {donators: donators});
        }).catch((err) => {
            console.log(err.message);
        });
    });

    // edit
    app.get('/donors/:id/edit', (req, res) => {
        Donor.findById(req.params.id, (err, donators) => {
            res.render('edit-donators', {donators: donators});
        });
    });

    // update
    app.put('/donors/:id', (req, res) => {
        Donor.findByIdAndUpdate(req.params.id, req.body)
            .then(donators => {
                res.redirect(`/donors/${donators._id}`)
            }).catch(err => {
                console.log(err.message);
            });
    });

    // delete
    app.delete('/donors/:id', (req, res) => {
        console.log("DELETE donation");
        Donor.findByIdAndRemove(req.params.id).then((donators) => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        });
    });
}
