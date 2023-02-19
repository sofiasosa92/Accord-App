const router = require('express').Router();
const login = require('./login.js');
const apiRoutes = require('./api');
const withAuth = require('../utils/auth.js')
//const trivia = require('./trivia.js');


router.use('/api', apiRoutes);

router.use('/login', login);
router.use('/about',withAuth, (req,res) => {
    res.redirect('/html/about.html')
} );
//router.use('/trivia', trivia);
module.exports = router;
