const Person = require('../models/Person');
const Customer = require('../models/Customer');
const Employee = require('../models/Employee');

const EditionCustomer = require('../models/Edition_Customer');
const EditionReason = require('../models/Editiontype');
const Edition = require('../models/Edition');

const Movie = require('../models/Movie');
const Genre = require('../models/Genre');
const MovieStarring = require('../models/Movie_Starring');
const MovieGenre = require('../models/Movie_Genre');
const Star = require('../models/Star');
const MovieNomination = require('../models/Movie_Nomination');
const Nomination = require('../models/Nomination');
const Title = require('../models/Title');
const EditionMovie = require('../models/Edition_Movie');

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
            res.end();
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCustomers = (req, res, next) => {
    Customer.findAll()
        .then(customers => {
            console.log(customers);
            res.end();
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEmployees = (req, res, next) => {
    Employee.findAll()
        .then(employees => {
            console.log(employees);
            res.end();
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
            return person
                .createEmployee({
                    // Person_id_p: person.id_p,
                    user: user,
                    password: password
                });
        })
        .then((employee) => {
            console.log(employee);
            return res.status(201).json({
                msg: 'Employee created!',
                employeeId: employee.id_e,
                employeeName: firstname + ' ' + lastname,
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                msg: 'Error when creating employee.'
            })
        });
};

exports.postCustomer = (req, res, next) => {
    let employeeId = 2; //3 = employeeId------------------------req.body.
    let typeEdition = 1; //1 = Crear

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
    let registerDate = new Date().toISOString().slice(0, 10).replace('T', ' ')

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
            return person
                .createCustomer({
                    Person_id_p: person.id_p,
                    customer_status: customerStatus,
                    register_date: registerDate
                });
        })
        .then((Customer) => {
            console.log("Customer: ", Customer);
            //Table Customer_edition creates automatically thanks to association
            return Customer.createEdition({
                    Editiontype_id_te: typeEdition,
                    Employee_id_e: employeeId,
                    edition_date: registerDate,
                })
                .then((Edition) => {
                    console.log("Edition: ", Edition);
                    // return [Edition, Customer]
                    return res.status(201).json({
                        msg: 'Customer created!',
                        customerId: Customer.id_c,
                        customerName: firstname + ' ' + lastname,
                    });
                })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                msg: 'Error when creating customer.'
            })
        });
};

exports.postMovie = async (req, res, next) => {
    let employeeId = 2; //3 = employeeId------------------------req.body.
    let typeEdition = 1; //1 = Crear

    let duration = "150"; //req.body.firstname
    let premierYear = 2000; //req.body.lastname
    let unitPrice = 10; //req.body.phone
    let stock = 20; //req.body.email
    let movieStatus = true;

    let genres = [1, 2];

    let titles = ["La Matrix 2", "The Matrix 2", "La Matriz 2"]

    let nominations = [1, 2, 3, 4, 5];
    let winner = [false, false, false, true, true];
    let winnerYear = 2001;
    let starring = ["Keanu Reeves", "Carrie-Ann Moss", "Laurence Fishburne"];

    let registerDate = new Date().toISOString().slice(0, 10).replace('T', ' ')

    try {
        const movieExists = await Title.findAll({
            limit: 1,
            where: {
                movie_name: titles[0]
            }
        });
        console.log("Movie Exists?: ", movieExists);

        let movie;
        if (movieExists.length > 0) {
            return res.status(409).json({
                msg: 'Movie already exists!',
                movieId: movieExists[0].Movie_id_m
            });

        } else {
            movie = await Movie
                .create({
                    duration: duration,
                    premier_year: premierYear,
                    unit_price: unitPrice,
                    stock: stock,
                    movie_status: movieStatus
                });
            console.log("Movie: ", Movie);
        }

        const edition = await movie
            .createEdition({
                Editiontype_id_te: typeEdition,
                Employee_id_e: employeeId,
                edition_date: registerDate,
            });
        console.log("Edition: ", edition);

        titles.forEach(async (title) => {
            const mTitle = await movie
                .createTitle({
                    movie_name: title,
                });
            console.log("Title: ", mTitle);
        });

        genres.forEach(async (genre) => {
            const mGenre = await MovieGenre
                .create({
                    Movie_id_m: movie.id_m,
                    Genre_id_g: genre
                });
            console.log("Genre: ", mGenre);
        });


        starring.forEach(async (star) => {
            const firstName = star.split(" ")[0];
            const lastName = star.split(" ")[1];

            let mStar;
            const starExists = await Star.findOne({
                where: {
                    first_name: firstName,
                    last_name: lastName
                }
            });
            console.log("Star Exists: ", starExists);
            if (!starExists) {
                mStar = await movie
                    .createStar({
                        first_name: star.split(" ")[0],
                        last_name: star.split(" ")[1]
                    });
            } else {
                mStar = await MovieStarring
                    .create({
                        Movie_id_m: movie.id_m,
                        Stars_id_s: starExists.id_s
                    });
            }

            console.log("Star: ", mStar);
        });

        for (let i = 0; i < nominations.length; i++) {
            const movieNomination = await MovieNomination
                .create({
                    Movie_id_m: movie.id_m,
                    Nomination_id_pr: nominations[i],
                    winner: winner[i],
                    winner_year: winnerYear
                });
            console.log("NovieNomination: ", movieNomination);
        }

        return res.status(201).json({
            msg: 'Movie created succesfully!',
            movieName: titles[0],
            movieId: movie.id_m,

        })


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: 'Error when creating movie.'
        })
    }
};

exports.postLoan = async (req, res, next) => {
    let employeeId = 2; //3 = employeeId------------------------req.body.
    let typeEdition = 1; //1 = Crear

    let duration = "150"; //req.body.firstname
    let premierYear = 2000; //req.body.lastname
    let unitPrice = 10; //req.body.phone
    let stock = 20; //req.body.email
    let movieStatus = true;

    let genres = [1, 2];

    let titles = ["La Matrix 2", "The Matrix 2", "La Matriz 2"]

    let nominations = [1, 2, 3, 4, 5];
    let winner = [false, false, false, true, true];
    let winnerYear = 2001;
    let starring = ["Keanu Reeves", "Carrie-Ann Moss", "Laurence Fishburne"];

    let registerDate = new Date().toISOString().slice(0, 10).replace('T', ' ')

    try {
        const movieExists = await Title.findAll({
            limit: 1,
            where: {
                movie_name: titles[0]
            }
        });
        console.log("Movie Exists?: ", movieExists);

        let movie;
        if (movieExists.length > 0) {
            return res.status(409).json({
                msg: 'Movie already exists!',
                movieId: movieExists[0].Movie_id_m
            });

        } else {
            movie = await Movie
                .create({
                    duration: duration,
                    premier_year: premierYear,
                    unit_price: unitPrice,
                    stock: stock,
                    movie_status: movieStatus
                });
            console.log("Movie: ", Movie);
        }

        const edition = await movie
            .createEdition({
                Editiontype_id_te: typeEdition,
                Employee_id_e: employeeId,
                edition_date: registerDate,
            });
        console.log("Edition: ", edition);

        titles.forEach(async (title) => {
            const mTitle = await movie
                .createTitle({
                    movie_name: title,
                });
            console.log("Title: ", mTitle);
        });

        genres.forEach(async (genre) => {
            const mGenre = await MovieGenre
                .create({
                    Movie_id_m: movie.id_m,
                    Genre_id_g: genre
                });
            console.log("Genre: ", mGenre);
        });


        starring.forEach(async (star) => {
            const firstName = star.split(" ")[0];
            const lastName = star.split(" ")[1];

            let mStar;
            const starExists = await Star.findOne({
                where: {
                    first_name: firstName,
                    last_name: lastName
                }
            });
            console.log("Star Exists: ", starExists);
            if (!starExists) {
                mStar = await movie
                    .createStar({
                        first_name: star.split(" ")[0],
                        last_name: star.split(" ")[1]
                    });
            } else {
                mStar = await MovieStarring
                    .create({
                        Movie_id_m: movie.id_m,
                        Stars_id_s: starExists.id_s
                    });
            }

            console.log("Star: ", mStar);
        });

        for (let i = 0; i < nominations.length; i++) {
            const movieNomination = await MovieNomination
                .create({
                    Movie_id_m: movie.id_m,
                    Nomination_id_pr: nominations[i],
                    winner: winner[i],
                    winner_year: winnerYear
                });
            console.log("NovieNomination: ", movieNomination);
        }

        return res.status(201).json({
            msg: 'Movie created succesfully!',
            movieName: titles[0],
            movieId: movie.id_m,

        })


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: 'Error when creating movie.'
        })
    }
};