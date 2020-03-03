const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const Person = require('./models/Person');
const Customer = require('./models/Customer');
const Employee = require('./models/Employee');

// const errorController = require('./controllers/error');

const sequelize = require('./util/database');
const Discount = require('./models/Discount');
const EditionCustomer = require('./models/Edition_Customer');
const EditionMovie = require('./models/Edition_Movie');
const Edition = require('./models/Edition');
const Genre = require('./models/Genre');
const LoanMovie = require('./models/Loan_Movie');
const Loan = require('./models/Loan');
const MovieGenre = require('./models/Movie_Genre');
// const MoviePrize = require('./models/Movie_Prize');
const MovieStarring = require('./models/Movie_Starring');
const Movie = require('./models/Movie');
const Nomination = require('./models/Nomination');
const Price = require('./models/Price');
const Returned = require('./models/Returned');
const Sale = require('./models/Sale');
const Star = require('./models/Star');
const Title = require('./models/Title');
const EditionReason = require('./models/Editiontype');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');


app.use(bodyParser.urlencoded({
    extended: false
}));
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
// Edition.belongsTo(Employee, {as: 'Employee', foreignKey: 'Employee_ide_e'});
// Employee.hasMany(Edition, {as: 'Edition', foreignKey: 'Employee_ide_e'});

// EditionCustomer.belongsTo(Edition, {as: 'Edition', foreignKey: 'Edition_id_et'});
// Edition.hasMany(EditionCustomer, {as: 'Edition_Customer', foreignKey: 'Edition_id_et'});

// EditionCustomer.belongsTo(Customer, {as: 'Customer', foreignKey: 'Customer_id_c'});
// Customer.hasMany(EditionCustomer, {as: 'Edition_Customer', foreignKey: 'Customer_id_c'})
Edition.belongsToMany(Customer, { through: 'Edition_Customer', foreignKey: 'Edition_id_et'});
Customer.belongsToMany(Edition, {through: 'Edition_Customer', foreignKey: 'Customer_id_c'});




app.listen(3000);
