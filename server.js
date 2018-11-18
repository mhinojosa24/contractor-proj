const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = process.env.PORT || 3000;


app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');


app.get("/", (req, res) => {
    res.send('Hello World!')
});

let givers = [
    { companyName: "Netflix", amount: "$5,000.00"},
    { companyName: "Spodify", amount: "$2,000.00"}
]

app.get("/donators", (req, res) => {
    res.render('donators-index', {givers: givers});
});

if (!module.parent) {
    app.listen(port);
}

module.exports = app;
