const router = require('express').Router();
const {User} = require('../../models');
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
   //Check if code is valid
   
   //console.log(req.body.code);
   let currentUser;
   try {
    currentUser = await User.findByPk(req.app.locals.currentID);
    //console.log('Current User: \n\n');
    //console.log(currentUser.name);
    
   } catch (err) {

   }
   let codedUser;
   try {
    codedUser = await User.findOne({
        where: {
            codeid: req.body.code
        }
    });
   } catch (err) {}
   console.log(codedUser);
   
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