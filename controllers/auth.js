const Employee = require('../models/Employee');

//GETS -----------------------------------------------------------------
exports.loginPage = (req, res, next) => {
    res.render('sign_up', {
        //     prods: products,
        //     pageTitle: 'All Products',
        // path: '/sign_in'
    });

};

exports.authEmployee = async (req, res, next) => {
    const user = req.body.username;
    const pwd = req.body.password;

    try {
        const employee = await Employee.findOne({
            where: {
                user: user
            }
        });
        if (!employee) {
            // const error = new Error('Validation failed. User doestn exists.');
            // error.statusCode = 422;
            // throw error;
            res.redirect('/');
        }
        if (employee.password != pwd) {
            res.redirect('/');
            // return res.status(500).json({
            //     msg: 'Error. Wrong password.'
            // })
        }

        res.render('shortcuts', {

            //     prods: products,
            //     pageTitle: 'All Products',
            // path: '/admin/home'
        });



    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};