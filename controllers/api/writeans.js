const router = require('express').Router();
const {User, Answer} = require('../../models');
const sequelize = require('../../config/connection');


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

router.post('/',async (req,res) => {
   
   
   //Get the current user
   let currentUser;
   try {
    currentUser = await User.findByPk(req.app.locals.currentID);
    //console.log('Current User: \n\n');
    //console.log(currentUser.name);
    
   } catch (err) {
    res.render('error',{err});
   }
   console.log('\n\n\n\n')
   //Get the questions
   console.log(req.body.a1);
   console.log(JSON.stringify(req.body.a1));
   //Go to main
    res.redirect('../html/main.html');
})


module.exports = router;