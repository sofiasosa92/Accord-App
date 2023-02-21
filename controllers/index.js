const router = require('express').Router();
const login = require('./login.js');
const apiRoutes = require('./api');
const withAuth = require('../utils/auth.js')
const trivia = require('./trivia.js');

const logoff = require('./logoff.js');

router.use('/api', apiRoutes);

router.use('/login', login);
router.use('/about',withAuth, (req,res) => {
    res.redirect('/html/about.html')
} );
router.use('/invite', withAuth, (req,res) => {
    res.redirect('/html/invite.html');
});
router.use('/results', withAuth, (req,res) => {
    res.redirect('/html/results.html');
})
router.use('/trivia', trivia);
router.use('/logoff', logoff);
module.exports = router;
