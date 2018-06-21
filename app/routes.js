var flash = require('connect-flash');
var Cto = require('./models/cto');
var Dev = require('./models/devs');


module.exports = function (app, passport) {


    app.get('/', function (req, res) {
        var successMsg = req.flash('success')[0];
        res.render('landing/home', {layout: 'homelayout',successMsg:successMsg,noMessages: !successMsg})

    });


    app.get('/recruiter', function (req, res) {

        res.render('users/cto', {
            layout: 'users'
        });
    });
    app.post('/recruiter', function (req, res) {


        var cto = new Cto({

            username: req.body.username,
            title: req.body.title,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country

        });
        cto.save(function (err, result) {
            req.flash('success','Application successful we will get back to you shortly.Thank you');
            res.redirect('/')
        })

    });

    app.get('/dev', function (req, res) {

        res.render('users/dev', {
            layout: 'users',

        });
    });
    app.post('/dev', function (req, res) {


        var dev = new Dev({

            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country

        });
        dev.save(function (err, result) {
            req.flash('success','Application successful will get back to you shortly');
            res.redirect('/')
        })

    });


    app.get('/pricing', function (req, res) {

        res.render('landing/pricing', {layout: 'homelayout'});
    });





};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

