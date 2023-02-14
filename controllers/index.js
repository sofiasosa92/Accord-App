const router = require('express').Router();
const login = require('./login.js');
const apiRoutes = require('./api');
//const homeRoute = require('./homeRoute.js');

//router.use('/', homeRoute);
router.use('/api', apiRoutes);

router.use('/login', login);

module.exports = router;
