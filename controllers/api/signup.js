const router = require('express').Router();

router.get('/',(req,res) => {
    //

    //res.status(200).send("Suceess");
    res.render('signup');
})


module.exports = router;