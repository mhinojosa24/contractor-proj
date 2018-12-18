
const express = require('express')
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Donor = require('./models/donor');
// const popupS = require('popups');


app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');
app.use(bodyParser.urlencoded({ extend: true}));
app.use(methodOverride('_method'));// override with POST having ?_method=DELETE or ?_method=PUT
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Charity-Donor');

app.use(express.static('public'));


const donors = require('./controllers/donors')(app);



if (!module.parent) {
    app.listen(port);
}

module.exports = app;
