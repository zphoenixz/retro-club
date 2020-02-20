const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


db.execute('SELECT * FROM anytable')
    .then(result => {
        console.log(result[0], result[1]);
    })
    .catch(err => {
        console.log(err);
    });


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));