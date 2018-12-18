// controllers/donors.js
const Donor = require('../models/donor');
// var popupSd = require('popups')

module.exports = function(app) {

    // index
    app.get("/", (req, res) => {
        Donor.find().then(donators => {
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
        if (req.body.companyName != ""){
            Donor.create(req.body).then((donator) => {
                console.log(donator)
                res.redirect(`/donors/${donator._id}`);
            }).catch((err) => {
                console.log(err.message);
            });
        }// } else {
        //     popup.alert({
        //         content: 'Hello!'
        //     })
        // }
    });

    // show
    app.get('/donors/:id', (req, res) => {
        Donor.findById(req.params.id).then((donator) => {
            res.render('show-donators', {donators: donator});
        }).catch((err) => {
            console.log(err.message);
        });
    });

    // edit
    app.get('/donors/:id/edit', (req, res) => {
        Donor.findById(req.params.id, (err, data) => {
            res.render('edit-donators', {donator: data});
        });
    });

    // update
    app.put('/donors/:id', (req, res) => {
        Donor.findByIdAndUpdate(req.params.id, req.body)
            .then(donator => {
                res.redirect(`/donors/${donator._id}`)
            }).catch(err => {
                console.log(err.message);
            });
    });

    // delete
    app.delete('/donors/:id', (req, res) => {
        console.log("DELETE donation");
        Donor.findByIdAndRemove(req.params.id).then((donator) => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        });
    });
}
