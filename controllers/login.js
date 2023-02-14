const router = require('express').Router();
const {User} = require('../models');

router.post('/', async (req, res) => {
    //Check if valid password
    console.log(req.body);
    try {
        const currentUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (!currentUser) {
            res.status(401).redirect('../html/401.html');
            return;
        }
        const currentUserPassword = await currentUser.checkPassword(req.body.password);

        if (!currentUserPassword) {
            res.status(401).redirect('../html/401.html');
            return;
        }
    } catch (err) {
        res.redirect('/');
        return
    }
    //log into session
    req.session.save(() => {
        req.session.loggedIn = true;
      });
    //redirect to about 
    res.redirect('/html/about.html');
})

module.exports = router;