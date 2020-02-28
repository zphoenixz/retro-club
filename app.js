const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const Customer = require('./models/Customer');
const Discount = require('./models/Discount');
const EditionCustomer = require('./models/Edition_Customer');
const EditionMovie = require('./models/Edition_Movie');
const Edition = require('./models/Edition');
const Employee = require('./models/Employee');
const Genre = require('./models/Genre');
const LoanMovie = require('./models/Loan_Movie');
const Loan = require('./models/Loan');
const MovieGenre = require('./models/Movie_Genre');
const MovieNomination = require('./models/Movie_Nomination');
const MovieStarring = require('./models/Movie_Starring');
const Movie = require('./models/Movie');
const Nomination = require('./models/Nomination');
const Person = require('./models/Person');
const Price = require('./models/Price');
const Returned = require('./models/Returned');
const Sale = require('./models/Sale');
const Star = require('./models/Star');
const Title = require('./models/Title');
const TypeOfEdition = require('./models/Type_of_Edition');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


// db.execute('SELECT * FROM anytable')
//     .then(result => {
//         console.log(result[0], result[1]);
//     })
//     .catch(err => {
//         console.log(err);
//     });


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));