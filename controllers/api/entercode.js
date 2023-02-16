const router = require('express').Router();
const {User} = require('../../models');
const sequelize = require('../../config/connection');
//Add with auth


router.post('/',async (req,res) => {
   
   
   //Get the current user
   let currentUser;
   try {
    currentUser = await User.findByPk(req.app.locals.currentID);
    //console.log('Current User: \n\n');
    //console.log(currentUser.name);
    
   } catch (err) {
    res.render('error',{err});
   }
   //Get the user referred to by the code
   let codedUser;
   try {
    codedUser = await User.findOne({
        where: {
            codeid: req.body.code
        }
    });
    //invalid code
    if (!codedUser ) {
        res.status(400).send('No such code');
    }
   } catch (err) {
    res.render('error',{err});
   }
   //console.log(codedUser);
   //Asign BFF to current user
   try {
    currentUser.BFF = codedUser.id;
    currentUser.save(); 
    sequelize.sync();
   } catch (err) {
    res.render('error',{err});
   }
   //Go to main
    res.redirect('../html/main.html');
})


module.exports = router;