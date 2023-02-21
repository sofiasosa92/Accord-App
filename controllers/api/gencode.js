const router = require('express').Router();
const {User} = require('../../models');
//Add with auth


router.get('/',async (req,res) => {
   //Get the current user and return (json) its associated code.
   try {
        const user = await User.findByPk(req.app.locals.currentID);
        //console.log(user.codeid);
        
        res.json({code: user.codeid});
    } catch (err) {
        console.log(err);
        res.render('error',{err});
        
        return;
    }
   
})


module.exports = router;