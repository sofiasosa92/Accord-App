const router = require('express').Router();
const {User} = require('../../models');
//Add with auth


router.get('/',async (req,res) => {
    //
    /*
    Check if the code is valid
    Get the logged user
    get current user
    make this current user's iitiator to false
    make this current user's code to req.body
    */
   console.log(req.app.locals.currentID);
   try {
        const user = await User.findByPk(req.app.locals.currentID);
        console.log(user.codeid);
        
        res.json({code: user.codeid});
    } catch (err) {
        console.log(err);
        res.render('error',{err});
        //res.status(400).send('You provided incorrect user name information');
        return;
    }
   
    //res.redirect('../html/main.html');
})


module.exports = router;