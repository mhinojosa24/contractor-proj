const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');


app.get("/", (req, res) => {
    res.send('Hello World!')
});

if (!module.parent) {
    app.listen(port);
}

module.exports = app;
