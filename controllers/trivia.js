const router = require('express').Router();
const questions = require('../seeds/questions.json');
const withAuth = require('../utils/auth.js');

router.get('/',withAuth, async (req, res) => {
    //Get all of the questions  (These were prepopulated in the schema.sql file since they are read only)
    try {
        
        res.render('trivia', {questions, layout: false});
    } catch (err) {
        render('error', {err});
    }
    
    
})

module.exports = router;
