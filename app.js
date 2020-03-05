const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const Person = require('./models/Person');
const Customer = require('./models/Customer');
const Employee = require('./models/Employee');
const Edition = require('./models/Edition');
const EditionCustomer = require('./models/Edition_Customer');
const EditionReason = require('./models/Editiontype');
const Movie = require('./models/Movie');
const Genre = require('./models/Genre');
const MovieStarring = require('./models/Movie_Starring');
const MovieGenre = require('./models/Movie_Genre');
const Star = require('./models/Star');
const MovieNomination = require('./models/Movie_Nomination');
const Nomination = require('./models/Nomination');
const Title = require('./models/Title');
const EditionMovie = require('./models/Edition_Movie');

const Discount = require('./models/Discount');
const LoanMovie = require('./models/Loan_Movie');
const Loan = require('./models/Loan');
const Price = require('./models/Price');
const Returned = require('./models/Returned');
const Sale = require('./models/Sale');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/', authRoutes);

// app.use(errorController.get404);
// 0 =============================
Employee.belongsTo(Person, {as: 'Person', foreignKey: 'Person_id_p'});
Person.hasMany(Employee, {as: 'Employee', foreignKey: 'Person_id_p'});

Customer.belongsTo(Person, {as: 'Person', foreignKey: 'Person_id_p'});
Person.hasMany(Customer, {as: 'Customer', foreignKey: 'Person_id_p'});

// 1 =============================
Edition.belongsTo(Employee, {as: 'Employee', foreignKey: 'Employee_id_e'});
Employee.hasMany(Edition, {as: 'Edition', foreignKey: 'Employee_id_e'});

// EditionCustomer.belongsTo(Edition, {as: 'Edition', foreignKey: 'Edition_id_et'});
// Edition.hasMany(EditionCustomer, {as: 'Edition_Customer', foreignKey: 'Edition_id_et'});

// EditionCustomer.belongsTo(Customer, {as: 'Customer', foreignKey: 'Customer_id_c'});
// Customer.hasMany(EditionCustomer, {as: 'Edition_Customer', foreignKey: 'Customer_id_c'})
Edition.belongsToMany(Customer, { through: 'Edition_Customer', foreignKey: 'Edition_id_et'});
Customer.belongsToMany(Edition, {through: 'Edition_Customer', foreignKey: 'Customer_id_c'});

// 2 =============================

Movie.belongsToMany(Genre, { through: 'Movie_Genre', foreignKey: 'Movie_id_m'});
Genre.belongsToMany(Movie, { through: 'Movie_Genre', foreignKey: 'Genre_id_g'});

Movie.belongsToMany(Star, { through: 'Movie_Starring', foreignKey: 'Movie_id_m'});
Star.belongsToMany(Movie, { through: 'Movie_Starring', foreignKey: 'Stars_id_s'});

Movie.belongsToMany(Edition, { through: 'Edition_Movie', foreignKey: 'Movie_id_m'});
Edition.belongsToMany(Movie, { through: 'Edition_Movie', foreignKey: 'Edition_id_et'});

// Movie.belongsToMany(Nomination, { through: 'Movie_Nomination', foreignKey: 'Movie_id_m'});
// Nomination.belongsToMany(Movie, { through: 'Movie_Nomination', foreignKey: 'Nomination_id_pr'});
MovieNomination.belongsTo(Movie, {as: 'Movie', foreignKey: 'Movie_id_m'});
Movie.hasMany(MovieNomination, {as: 'MovieNomination', foreignKey: 'Movie_id_m'});

MovieNomination.belongsTo(Nomination, {as: 'Nomination', foreignKey: 'Nomination_id_pr'});
Nomination.hasMany(MovieNomination, {as: 'MovieNomination', foreignKey: 'Nomination_id_pr'});

Title.belongsTo(Movie, {as: 'Movie', foreignKey: 'Movie_id_m'});
Movie.hasMany(Title, {as: 'Title', foreignKey: 'Movie_id_m'});


// 3 =============================
Sale.belongsTo(Loan, {as: 'Loan', foreignKey: 'Loan_id_l'});
Loan.hasMany(Sale, {as: 'Sale', foreignKey: 'Loan_id_l'});

Sale.belongsTo(Price, {as: 'Price', foreignKey: 'Price_id_p'});
Price.hasMany(Sale, {as: 'Sale', foreignKey: 'Price_id_p'});

Sale.belongsTo(Discount, {as: 'Discount', foreignKey: 'Discount_id_d'});
Discount.hasMany(Sale, {as: 'Sale', foreignKey: 'Discount_id_d'});

Movie.belongsToMany(Loan, { through: 'Loan_Movie', foreignKey: 'Movie_id_m'});
Loan.belongsToMany(Movie, { through: 'Loan_Movie', foreignKey: 'Loan_id_l'});

Returned.belongsTo(Loan, {as: 'Loan', foreignKey: 'Loan_id_l'});
Loan.hasMany(Returned, {as: 'Returned', foreignKey: 'Loan_id_l'});

Returned.belongsTo(Employee, {as: 'Employee', foreignKey: 'Employee_id_e'});
Employee.hasMany(Returned, {as: 'Returned', foreignKey: 'Employee_id_e'});

Loan.belongsTo(Employee, {as: 'Employee', foreignKey: 'Employee_id_e'});
Employee.hasMany(Loan, {as: 'Loan', foreignKey: 'Employee_id_e'});

Loan.belongsTo(Customer, {as: 'Customer', foreignKey: 'Customer_id_c'});
Customer.hasMany(Loan, {as: 'Loan', foreignKey: 'Customer_id_c'});


app.listen(3000);
