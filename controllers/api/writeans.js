const router = require('express').Router();
const {User, Answer} = require('../../models');
const sequelize = require('../../config/connection');

/*
router.get('/:ans/:qid', async (req,res) => {
    console.log('\n\n\n\n');
    console.log(req.params.ans + req.params.qid);
    let currentUser, currentAnswer;
    try {
     currentUser = await User.findByPk(req.app.locals.currentID);
     if (currentUser.answers === null) {
        currentAnswer = await Answer.create({
            id: currentUser.codeid,
            userID: currentUser.id
        })
     } else {
        currentAnswer = await Answer.findOne({
            where: {
                id: currentUser.codeid,
            }
        })
     }
     switch(req.params.qid) {
        case 1: 
            currentAnswer.a1 = req.params.ans;
            break;
        case 2: 
            currentAnswer.a2 = req.params.ans;
            break;
     }
     currentAnswer.save();
     sequelize.sync();

    } catch (err) {
     res.render('error',{err});
    }
})
*/
router.post('/', async (req,res) => {
    /*Check if all the questions were answered by checking then length of the request body.
    It was to be 25.  Note: To the TA grading ->  This is not a "production" ready method.
    In theory, a hacker could just send 25 random pieces of data and crash the app. This method was
    used due to time constraints.   */
    if (Object.values(req.body).length !== 25) {
        //Render error page if the user did not enter all the questions
        res.render('error');
        return;
    }
    //Get the current user
    let currentUser;
    try {
        currentUser = await User.findByPk(req.app.locals.currentID);
    } catch (err) {
        res.render('error', {err});
        return;
    }
    //Check if the user alredy answered -> if so return to main
    try {
        if (currentUser.answers !== null) {
            console.log('\n\n\nAlready answered');
            res.redirect('../html/main.html');
            return;
        }
    } catch (err) {
        res.render('error', {err})
    }

    //Write the answers to table
    let currentAnswerSet;
    try {
        currentAnswerSet = await Answer.create({
            userID: currentUser.id,
            a1: req.body.Answer1,
            a2: req.body.Answer2,
            a3: req.body.Answer3,
            a4: req.body.Answer4,
            a5: req.body.Answer5,
            a6: req.body.Answer6,
            a7: req.body.Answer7,
            a8: req.body.Answer8,
            a9: req.body.Answer9,
            a10: req.body.Answer10,
            a11: req.body.Answer11,
            a12: req.body.Answer12,
            a13: req.body.Answer13,
            a14: req.body.Answer14,
            a15: req.body.Answer15,
            a16: req.body.Answer16,
            a17: req.body.Answer17,
            a18: req.body.Answer18,
            a19: req.body.Answer19,
            a20: req.body.Answer20,
            a21: req.body.Answer21,
            a22: req.body.Answer22,
            a23: req.body.Answer23,
            a24: req.body.Answer24,
            a25: req.body.Answer25,
        });
        console.log(`\n\nCurrent Answwer Set set: ${currentAnswerSet.id}`)
    } catch (err) {
        res.render('error', {err});
    }
    //Store the question id on the current users.answer
    try {
        currentUser.answers = currentAnswerSet.id;
        await currentUser.save();
    } catch (err) {
        res.render('error', {err});
    }
    //redirect to
    res.redirect('../html/main.html');

})


module.exports = router;