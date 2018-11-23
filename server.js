const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Charity-Donor');


app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');
// app.use(bodyParser.urlencoded({ extend: true}));

const Donors = mongooe..model(Donor)


let givers = [
    { companyName: "Netflix", amount: "$5,000.00"},
    { companyName: "Spodify", amount: "$2,000.00"}
]

app.get("/", (req, res) => {
    res.render('donators-index', {givers: givers});
});

if (!module.parent) {
    app.listen(port);
}

module.exports = app;
