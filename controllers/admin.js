const {
    Op
} = require("sequelize");
const sequelize = require('../util/database');
const querystring = require("querystring");

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

const Discount = require('../models/Discount');
const LoanMovie = require('../models/Loan_Movie');
const Loan = require('../models/Loan');
const Price = require('../models/Price');
const Returned = require('../models/Returned');
const Sale = require('../models/Sale');

const InCart = require('../models/InCart');
//Views -----------------------------------------------------------------
exports.getHomeview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('shortcuts', {
        path: '/shortcuts'
    });
};

exports.getCartview = async (req, res, next) => {
    const message = req.query.msg;
    const error = req.query.err;

    console.log(message, error);
    try {
        const movies = await InCart.findAll({
            raw: true
        });
        var cartItems = []

        for (const movie of movies) {

            const movieTitle = await Title.findAll({
                include: [{
                    model: Movie,
                    as: 'Movie',
                    required: true,
                    where: {
                        movie_status: true
                    },
                }],
                where: {
                    movie_id_m: movie.id_movie
                },
                raw: true,
                limit: 1
            });
            cartItems.push({
                id: movieTitle[0].Movie_id_m,
                title: movieTitle[0].movie_name
            });
        }

        const discount = await Discount.findAll({
            raw: true,
        });
        const price = await Price.findAll({
            raw: true
        });

        const actualDiscount = (await Discount.findAll({
            where: {
                superior_limit: {
                    [Op.gt]: cartItems.length,
                }
            },
            raw: true,
            order: [
                ['id_d', 'ASC'],
            ]
        }))[0];

        console.log("Cart items: ", cartItems);
        console.log("Discount: ", discount);
        console.log("Actual discount: ", actualDiscount.discount);
        console.log("Price: ", price);

        res.render('cart_summary', {
            path: '/cart',
            cartItems: cartItems,
            discount: discount,
            actualDiscount: actualDiscount.discount,
            price: price,
            message: message,
            error: error
        });
    } catch (error) {
        console.log(error);
    }

};

exports.getCustomerview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('client', {
        path: '/customer'
    });
};

exports.getSearchCustomerview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('search_client', {
        path: '/customer'
    });
};

exports.getAddCustomerview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('add_client', {
        path: '/customer'
    });
};

exports.getEditCustomerview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('edit_client', {
        path: '/customer'
    });
};

exports.getLoanview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('loans', {
        path: '/loan'
    });
};

exports.postLoanSearchview = async (req, res, next) => {
    const toSearch = req.body.search;
    const by = req.body.by;
    console.log("asdasdasdasd");
    console.log(toSearch, by);
    try {
        let loans;
        if (by == "loanId") {
            loans = await Person.findAll({
                include: [{
                    model: Customer,
                    as: 'Customer',
                    required: true,
                    include: [{
                        model: Loan,
                        as: 'Loan',
                        required: true,
                        where: {
                            id_l: parseInt(toSearch)
                        },
                    }],
                }],
                raw: true,
                limit: 1
            });
        } 
        console.log(loans);
        console.log(loans[0]);
        console.log(loans[0].first_name);
        // console.log(loans[0].Customer.id_c);
        console.log(loans[0]['Customer.id_c']);

        console.log('Employee Id', req.session.employee);
        req.session.loans = loans;
        res.render('search_loans', {
            path: '/loan',
            loans: loans
        });
    } catch (error) {
        console.log(error);
    }
};

exports.getLoanSearchview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('search_loans', {
        path: '/loan'
    });
};

exports.getMovieview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('movies', {
        path: '/movie'
    });
};

exports.getMovieSearchview = async (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('search_movie', {
        path: '/movie',
    });
};

exports.getMovieAddview = (req, res, next) => {
    console.log('Employee Id', req.session.employee);
    res.render('add_movie', {
        path: '/movie'
    });
};

exports.getRulesview = async (req, res, next) => {
    try {
        const discounts = await Discount.findAll({
            raw: true,
        });
        const prices = await Price.findAll({
            raw: true,
        });
        console.log('Employee Id', req.session.employee);
        res.render('rules', {
            discounts: discounts,
            prices: prices,
            path: '/rules'
        });
    } catch (error) {
        console.log(error);
    }
};


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

exports.postCustomer = async (req, res, next) => {
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

    let titles = ["La Matrix", "The Matrix", "La Matriz"]

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
    let employeeId = req.session.employee; //3 = employeeId------------------------req.body.
    let customerId = req.body.customer_id;
    let priceId = 1;
    let moviesId = [];

    var today = new Date();
    let startDate = today.toISOString().slice(0, 10).replace('T', ' ');
    let days = parseInt(req.body.days.split(" ")[0]);

    try {
        if (req.body.customer_id == "") {
            const error = 'Validation failed. Client ID empty.';
            throw error;
        }
        if (req.body.days == "Number of days") {
            const error = 'Validation failed. Number of days empty.';
            throw error;
        }
        const checkUser = await Customer.findByPk(customerId);
        if (!checkUser) {
            const error = 'Validation failed. Customer doesnt exist.';
            throw error;
        }

        var endDate = new Date(today.getTime() + 60 * 60 * 24 * 1000 * days).toISOString().slice(0, 10).replace('T', ' ');

        const moviesInCart = await InCart.findAll({
            raw: true
        });

        for (const item of moviesInCart) {
            moviesId.push(item.id_movie);
        }
        if (moviesId.length == 0) {
            const error = 'Validation failed. No movies in cart.';
            throw error;
        }

        let movies = [];

        const customerStatus = await Customer.findByPk(customerId);

        if (customerStatus.customer_status == 0) {
            const error = 'Loan rejected. Client :' + customerId + ': is Blacklisted.';
            throw error;
            // return res.status(409).json({
            //     msg: 'Loan rejected. User is Blacklisted.',
            //     userID: customerId
            // });
        }

        const prevLoan = await Loan.findAll({
            where: {
                Customer_id_c: customerId
            },
            order: [
                ['start_date', 'DESC'],
            ]
        });
        // console.log("Previous Loan: ", prevLoan[0]);
        if (prevLoan.length > 0) {
            const lastReturned = await Returned.findOne({
                where: {
                    Loan_id_l: prevLoan[0].id_l
                }
            });
            // console.log("Last Returned: ", lastReturned, prevLoan[0].end_date, startDate);

            if (prevLoan[0].end_date >= startDate && !lastReturned) {
                const error = 'Loan rejected. Client :' + customerId + ': is yet to return a loan :' + prevLoan[0].id_l + ':.';
                throw error;
            } else if (prevLoan[0].end_date < startDate && !lastReturned) {

                const customerUpdated = await Customer.update({
                    customer_status: 0
                }, {
                    where: {
                        id_c: customerId
                    }
                });
                // console.log("customer Updated: ", customerUpdated);
                const error = 'Loan rejected. Client :' + customerId + ': owes a loan :' + prevLoan[0].id_l + ':. Client has been Blacklisted.';
                throw error;
            }
        }

        moviesId.forEach(async (movieId) => {
            const movieEnoughStock = await Movie.findByPk(movieId);
            if (movieEnoughStock.stock == 0) {
                const error = 'Loan rejected. Movie :' + movieEnoughStock.Movie_id_m + ':. Movie is out of stock.';
                throw error;
            }
            movies.push(movieEnoughStock);
            // console.log("Movie Enough Stock: ", movieEnoughStock);
        });

        const loan = await Loan.create({
            Employee_id_e: employeeId,
            Customer_id_c: customerId,
            start_date: startDate,
            end_date: endDate
        });

        movies.forEach(async (movie) => {

            const loanMovie = await LoanMovie.create({
                Loan_id_l: loan.id_l,
                Movie_id_m: movie.id_m
            });
            // console.log("Loan Movie: ", loanMovie);
            const movieUpdated = await movie.update({
                stock: sequelize.literal('stock - 1')
            }, {
                where: {
                    id_m: movie.id_m
                }
            });
            // console.log("Updated Movie: ", movieUpdated);
        });

        const discount = (await Discount.findAll({
            where: {
                superior_limit: {
                    [Op.gt]: moviesId.length,
                }
            },
            order: [
                ['id_d', 'ASC'],
            ]
        }))[0];
        // console.log("Discount: ", discount);

        const price = await Price.findByPk(priceId);
        // console.log("Price: ", price);

        const total1 = price.first_day_price + price.addition_per_day * (days - 1);
        const total2 = moviesId.length * total1;
        const total3 = total2 * (1 - discount.discount);
        const total4 = Math.round(total3 * 10) / 10
        // console.log(total1, total2, total3, total4);
        const sale = await Sale.create({
            Loan_id_l: loan.id_l,
            Discount_id_d: discount.id_d,
            Price_id_p: price.id_p,
            total: total4
        });
        // console.log("Sale: ", sale);
        const message = 'Loan :' + loan.id_l + ': created succesfully!. Total: ' + total4 + ' Bs.';

        res.redirect('/admin/cart?msg=' + message);

    } catch (err) {
        console.log(err);
        res.redirect('/admin/cart?err=' + err);

    }
};

exports.postRulesnew = async (req, res, next) => {

    const option = parseInt(req.body.options);

    const min = req.body.min;
    const max = req.body.max;
    const dis = parseInt(req.body.des) / 100;

    const firstDayPrice = req.body.first_day_price;
    const afterPrice = req.body.after_price;

    const maxDays = req.body.max_days;
    console.log(min, max, dis, firstDayPrice, afterPrice, maxDays);

    try {
        if (min > max) {
            const error = new Error("Min % cannot be greater than Max %.")
            throw error;
        }
        if (2 > maxDays) {
            const error = new Error("Max days cannot be smaller than 2 days.")
            throw error;
        }
        const discountTable = await Discount.findByPk(option);
        await discountTable.update({
            discount: dis
        });
        const maxDaysTable = await Discount.findAll();
        await maxDaysTable[maxDaysTable.length - 1].update({
            superior_limit: maxDays
        });

        const priceTable = await Price.findByPk(0);
        await priceTable.update({
            first_day_price: firstDayPrice,
            addition_per_day: afterPrice,
        });
        const discounts = await Discount.findAll({
            raw: true,
        });
        const prices = await Price.findAll({
            raw: true,
        });
        console.log("Rules updated successfully!")
        res.render('rules', {
            discounts: discounts,
            prices: prices,
            path: '/rules'
        });

    } catch (error) {
        const discounts = await Discount.findAll({
            raw: true,
        });
        const prices = await Price.findAll({
            raw: true,
        });
        console.log(error);
        res.render('rules', {
            discounts: discounts,
            prices: prices,
            path: '/rules'
        });
    }

    // console.log('Employee Id', req.session.employee);

};

exports.postMovieSearchview = async (req, res, next) => {
    const toSearch = req.body.search;
    const by = req.body.by;

    try {
        let moviesTitle;
        if (by == "title") {
            moviesTitle = await Title.findAll({
                include: [{
                    model: Movie,
                    as: 'Movie',
                    required: true,
                    where: {
                        movie_status: true
                    },
                }],
                where: {
                    movie_name: {
                        [Op.like]: toSearch + '%'
                    }
                },
                raw: true,
                limit: 10
            });
        } else if (toSearch == "") {
            moviesTitle = await Title.findAll({
                include: [{
                    model: Movie,
                    as: 'Movie',
                    required: true,
                    where: {
                        movie_status: true
                    }
                }],
                raw: true,
                limit: 10
            });
        } else {
            moviesTitle = await Title.findAll({
                include: [{
                    model: Movie,
                    as: 'Movie',
                    required: true,
                    where: {
                        movie_status: true
                    },
                }],
                where: {
                    movie_id_m: parseInt(toSearch)
                },
                raw: true,
                limit: 10
            });
        }
        req.session.moviesTitle = moviesTitle;
        res.render('search_movie', {
            moviesTitle: req.session.moviesTitle,
            path: '/movie'
        });
    } catch (error) {
        console.log(error);
    }
    console.log('Employee Id', req.session.employee);
};

exports.addMovieCart = async (req, res, next) => {

    const movieId = parseInt(req.body.movieIdC);
    console.log("movieId: ", movieId);
    try {
        const item = await InCart.create({
            id_movie: movieId,
            id_employee: req.session.employee
        });
        console.log("Cart item:", item);
        res.render('search_movie', {
            moviesTitle: req.session.moviesTitle,
            path: '/movie',
            message: "Movie have been added!"
        });
    } catch (error) {
        console.log(error);
    }
};

exports.delMovieCart = async (req, res, next) => {
    const movieId = parseInt(req.body.movieID);
    console.log("movieId: ", movieId);
    try {
        const item = await InCart.findAll({
            where:{
                id_movie: movieId
            },
            limit: 1
        });

        console.log("Cart item:", item);
        await item[0].destroy();
        res.redirect("/admin/cart")

    } catch (error) {
        console.log(error);
    }
};

exports.editMovie = async (req, res, next) => {
    const movieId = parseInt(req.body.movieIdE);
    console.log("movieId: ", movieId);

    try {
        const movieTitle = await Title.findAll({
            include: [{
                model: Movie,
                as: 'Movie',
                required: true,
                where: {
                    movie_status: true
                },
            }],
            where: {
                movie_id_m: movieId
            },
            raw: true,
            limit: 10
        });
        console.log(movieTitle)

        res.render('edit_movie', {
            path: '/movie'
        });


    } catch (error) {
        console.log(error);
    }
    // if (!req.session.isLoggedIn) {
    //     res.render('sign_up', {
    //         path: '/',
    //         error: customError,
    //     });
    // } else {
    //     return res.redirect('/admin/home');
    // }
};