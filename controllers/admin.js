const Person = require('../models/Person');
const Customer = require('../models/Customer');
const Employee = require('../models/Employee');

const EditionCustomer = require('../models/Edition_Customer');
const TypeOfEdition = require('../models/Type_of_Edition');
const Edition = require('../models/Edition');

//GETS -----------------------------------------------------------------
exports.getPersons = (req, res, next) => {
    Person.findAll()
        .then(persons => {
            // res.render('shop/product-list', {
            //     prods: products,
            //     pageTitle: 'All Products',
            //     path: '/products'
            // });
            console.log(persons);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCustomers = (req, res, next) => {
    Customer.findAll()
        .then(customers => {
            console.log(customers);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEmployees = (req, res, next) => {
    Employee.findAll()
        .then(employees => {
            console.log(employees);
        })
        .catch(err => {
            console.log(err);
        });
};

//POSTS -----------------------------------------------------------------
exports.postEmployee = (req, res, next) => {
    let firstname = "Ramo"; //req.body.firstname
    let lastname = "Vald"; //req.body.lastname
    let phone = "67890195"; //req.body.phone
    let email = "ramo@gmail.com"; //req.body.email
    let birthdate = '1992-02-02'; //req.body.birthdate
    let address = 'calle 2 los penocos'; //req.body.address
    let idnumber = "12345678"; //req.body.idnumber
    let nit = "Ramo"; //req.body.nit
    let lat = 54.1347287; //req.body.lat
    let longitude = 54.1347287; //req.body.longitude

    let user = "ramirojrr"; //req.body.user
    let password = "12"; //req.body.password

    Person
        .create({
            first_name: firstname,
            last_name: lastname,
            phone: phone,
            email: email,
            address: address,
            birth_date: birthdate,
            idnumber: idnumber,
            idnumber: idnumber,
            nit: nit,
            email: email,
            lat: lat,
            longitude: longitude,
        })
        .then(person => {
            // fetchedCart = cart;
            // return cart.getProducts({
            //     where: {
            //         id: prodId
            //     }
            // });
            console.log(person);
            return Employee
                .create({
                    Person_id_p: person.id_p,
                    user: user,
                    password: password
                });
        })
        .then((employee) => {
            console.log(employee);
            return;
        })
        .catch(err => console.log(err));
};

exports.postCustomer = (req, res, next) => {
    let employeeId = 3;//3 = employeeId------------------------req.body.
    let typeEdition = 1;//1 = Crear

    let firstname = "Ramo"; //req.body.firstname
    let lastname = "Vald"; //req.body.lastname
    let phone = "67890195"; //req.body.phone
    let email = "ramo@gmail.com"; //req.body.email
    let birthdate = '1992-02-02'; //req.body.birthdate
    let address = 'calle 2 los penocos'; //req.body.address
    let idnumber = "12345678"; //req.body.idnumber
    let nit = "Ramo"; //req.body.nit
    let lat = 54.1347287; //req.body.lat
    let longitude = 54.1347287; //req.body.longitude

    let customerStatus = true; //req.body.password

    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let registerDate = year + "/" + month + "/" + day;

    Person
        .create({
            first_name: firstname,
            last_name: lastname,
            phone: phone,
            email: email,
            address: address,
            birth_date: birthdate,
            idnumber: idnumber,
            idnumber: idnumber,
            nit: nit,
            email: email,
            lat: lat,
            longitude: longitude,
        })
        .then(person => {
            console.log("Person: ", person);
            return Customer
                .create({
                    Person_id_p: person.id_p,
                    customer_status: customerStatus,
                    register_date: registerDate
                });
        })
        .then((Customer) => {
            console.log("Customer: ", Customer);
            return [Edition.create({
                Employee_id_e: employeeId,
                Type_of_Edition_id_te: typeEdition,
                edition_date: registerDate
            }), Customer.id_c];

        })
        .then((Data) => {
            console.log("Edition: ", Data[0]);
            return EditionCustomer.create({
                Edition_id_et: Data[0].id_et,
                Customer: Data[1]
            });
        })
        .catch(err => console.log(err));
};