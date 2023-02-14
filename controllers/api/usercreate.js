const router = require('express').Router();
//const sequelize = require('./config/connection');
const {User} = require('../../models');

router.post('/',async (req,res) => {
    //
    //console.log(req.body);
    
    //Create user
    try {
        const newUser = await User.create({
            name: req.body.user,
            email: req.body.email,
            password: req.body.password,
            friend_id: null
        });
    } catch (err) {
        console.log(err);
        res.status(400).send('You provided incorrect user name information');
        return;
    }
    
    //Log in
    //redirect to either invite or main
    res.redirect('../html/about.html');
})


module.exports = router;