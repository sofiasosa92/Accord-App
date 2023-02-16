const router = require('express').Router();
const {User, Current} = require('../../models');
//Add with auth


router.post('/',async (req,res) => {
    //
    /*
    Check if the code is valid
    Get the logged user
    get current user
    make this current user's iitiator to false
    make this current user's code to req.body
    */
   let logggedUser = await Current.findOne({
    where: {
        id: 1
    }
   });
   console.log(req.body);
   try {
    let currentUser = await User.findByPk(logggedUser.currentNumber);
    console.log(currentUser);
    currentUser.initiator = false;
    currentUser.codeID = req.body.code;
    currentUser.save();
   } catch (err) {}
   //req.body.code;
    // try {
    //     const newUser = await User.create({
    //         name: req.body.user,
    //         email: req.body.email,
    //         password: req.body.password,
    //     });
    // } catch (err) {
    //     console.log(err);
    //     res.render('error',{err});
    //     //res.status(400).send('You provided incorrect user name information');
    //     return;
    // }
    res.redirect('../html/main.html');
})


module.exports = router;