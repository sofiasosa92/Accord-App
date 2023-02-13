const router = require('express').Router();

router.get('/',(req,res) => {
    //

    res.status(200).send("Suceess");
})


module.exports = router;