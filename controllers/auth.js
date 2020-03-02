const Employee = require('../models/Employee');

//GETS -----------------------------------------------------------------
exports.loginPage = (req, res, next) => {
    res.render('sign_in', {
        
    //     prods: products,
    //     pageTitle: 'All Products',
       path: '/sign_in'
    });

};

exports.authEmployee = (req, res, next) => {
    Employee.findAll()
        .then(employees => {
            // res.render('shop/product-list', {
            //     prods: products,
            //     pageTitle: 'All Products',
            //     path: '/products'
            // });
            employees.forEach(employee => {
                console.log(employee);
            });
            
        })
        .catch(err => {
            console.log(err);
        });
};