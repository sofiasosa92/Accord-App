const router = require('express').Router();


router.post('/', (req, res) => {
    //Check if valid password
    //log into session
    //redirect to about 
    res.redirect('/html/about.html');
})

module.exports = router;