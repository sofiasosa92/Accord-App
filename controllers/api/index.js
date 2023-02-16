const router = require('express').Router();
//const userRoutes = require('./userRoutes');
const signup = require('./signup.js')
const userCreate = require('./usercreate.js');
const enterCode = require('./entercode.js');

//router.use('/users', userRoutes);
router.use('/signup', signup);
router.use('/usercreate', userCreate);
router.use('/entercode', enterCode);

module.exports = router;
