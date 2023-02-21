const router = require('express').Router();
const {User} = require('../../models');
const sequelize = require('../../config/connection');


router.post('/',async (req,res) => {
   
   
   //Get the current user
   let currentUser;
   try {
    currentUser = await User.findByPk(req.app.locals.currentID);
    
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
   //Asign BFF to current user
   try {
    currentUser.BFF = codedUser.id;
    codedUser.BFF = currentUser.id;
    await currentUser.save(); 
    await codedUser.save()
    await sequelize.sync();
   } catch (err) {
    res.render('error',{err});
   }
   //Go to main
    res.redirect('../html/main.html');
})


module.exports = router;