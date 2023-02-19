const router = require('express').Router();
const {Question} = require('../models/Question.js');
const questions = require('../seeds/questions.json');
router.get('/', async (req, res) => {
    //Get all of the questions  (These were prepopulated in the schema.sql file since they are read only)
    try {
        
        res.render('trivia', {questions, layout: false});
    } catch (err) {
        render('error', {err});
    }
    
    
})

module.exports = router;

        // const questionsData = await Question.findAll();
        // console.log('\n\nInside\n\n');
        // console.log(questionsData);
        // const questions = await questionsData.map(e => e.get({plain: true}));
        // console.log(questions);
        // //res.render('trivia', {energy, layout: false});
        // res.render('trivia', {questions, layout: false});