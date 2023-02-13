const router = require('express').Router();
//const userRoutes = require('./userRoutes');
const signup = require('./signup.js')
const userCreate = require('./usercreate.js');

//router.use('/users', userRoutes);
router.use('/signup', signup);
router.use('/usercreate', userCreate);

module.exports = router;
