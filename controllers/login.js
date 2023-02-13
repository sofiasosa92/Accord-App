const router = require('express').Router();


router.post('/', (req, res) => {
    //Check if valid password
    res.redirect('/html/about.html');
})

module.exports = router;