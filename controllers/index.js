const router = require('express').Router();
const login = require('./login.js');
const apiRoutes = require('./api');
const withAuth = require('../utils/auth.js')
//const homeRoute = require('./homeRoute.js');

//router.use('/', homeRoute);
router.use('/api', apiRoutes);

router.use('/login', login);
router.use('/about',withAuth, (req,res) => {
    console.log(req.session.loggedIn);
    res.redirect('/html/about.html')
} )
module.exports = router;
