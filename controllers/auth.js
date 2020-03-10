const Employee = require('../models/Employee');

//GETS -----------------------------------------------------------------
exports.getLoginError = (req, res, next) => {
    const customError = req.params.customError;
    console.log("customerror: " ,customError);
    console.log('----------------------------');
    if (!req.session.isLoggedIn) {
        res.render('sign_up', {
            path: '/',
            error: customError,
        });
    } else {
        return res.redirect('/admin/home');
    }
};
exports.getLogin = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        res.render('sign_up', {
            path: '/',
        });
    } else {
        return res.redirect('/admin/home');
    }
};

exports.postLogin = async (req, res, next) => {
    const user = req.body.username;
    const pwd = req.body.password;
    console.log(user, pwd);
    try {
        const employee = await Employee.findOne({
            where: {
                user: user
            }
        });
        if (!employee) {
            console.log('Validation failed. User doesnt exists.');
            const error = 'Validation failed. User doestn exists.';
            // const error = new Error('Validation failed. User doestn exists.');
            // error.statusCode = 422;
            // throw error;
            return res.redirect('/login/'+error);
            // return res.redirect('/', {Error:'Validation failed. User doesnt exists.'});
        }
        if (employee.password != pwd) {
            console.log('Validation failed. Incorrect Password');
            const error = 'Validation failed. Incorrect Password';
            return res.redirect('/login/'+error);
        }

        req.session.isLoggedIn = true;
        console.log('Login success!');
        req.session.employee = employee.id_e;

        return res.redirect('/admin/home');

    } catch (err) {
        console.log('Login error!');
        console.log(err);
        // if (!err.statusCode) {
        //     err.statusCode = 500;
        // }
        // next(err);
    }
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    });
};

exports.getLog = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    } else {
        return res.redirect('/admin/home');
    }
};