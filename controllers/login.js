const router = require('express').Router();
const {User} = require('../models');

router.post('/', async (req, res) => {
    //Check if valid password
    try {
        const loggedUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (!loggedUser) {
            res.status(401).redirect('../html/401.html');
            return;
        }
        req.app.locals.currentID = loggedUser.id;
        console.log(loggedUser.id);
        const currentUserPassword = await loggedUser.checkPassword(req.body.password);

        if (!currentUserPassword) {
            res.status(401).redirect('../html/401.html');
            return;
        }
    } catch (err) {
        //Print Error
        res.render('error',{err});
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