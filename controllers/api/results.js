const router = require('express').Router();
const {User, Answer} = require('../../models/');
const withAuth = require('../../utils/auth.js');

router.get('/',withAuth, async (req, res) => {
    /*Check that both the current user 
        a) Current user has a BFF and has answered questions
        b) Current user's BFF has answered questions as well
        c) Get the answers for both users
        d) provide an object that will be used by the handle bar
    */
    let currentUser;
    try {
        currentUser = await User.findByPk(req.app.locals.currentID);
    } catch (err) {
        res.render('error', {err});
        return;
    }
    //Get the BFF
    let BFF;
    try {
        BFF = await User.findByPk(currentUser.BFF);
        if (!BFF) {
            //if there is no BFF just throw an error
            res.render('error', {err:'No BFF Found'});
            return;
        }
    } catch (err) {
        res.render('error', {err})
        return;
    }
    //Check that both user and BFF have completed the questions
    if (currentUser.answers === null || BFF.answers === null) {
        //res.render('error', {err:'Both user and BFF must have completed the questions'});
        res.redirect('/html/waiting.html');
        return;
    }
    //Get the answers for both user and BFF
    let answerSet1, answerSet2;
    try {
        answerSet1 = await Answer.findByPk(currentUser.answers);
        answerSet2 = await Answer.findByPk(BFF.answers);
    } catch (err) {
        res.render('error', {err});
        return;
    }
    let total,cat1,cat2,cat3,cat4,cat5;
    total = cat1 = cat2 = cat3 = cat4 = cat5 = 0;
    if (answerSet1.a1 == answerSet2.a1) {
        total++;
        cat1++;
    }
    if (answerSet1.a2 == answerSet2.a2) {
        total++;
        cat1++;
    }
    if (answerSet1.a3 == answerSet2.a3) {
        total++;
        cat1++;
    }
    if (answerSet1.a4 == answerSet2.a4) {
        total++;
        cat1++;
    }
    if (answerSet1.a5 == answerSet2.a5) {
        total++;
        cat1++;
    }
    if (answerSet1.a6 == answerSet2.a6) {
        total++;
        cat2++;
    }
    if (answerSet1.a7 == answerSet2.a7) {
        total++;
        cat2++;
    }
    if (answerSet1.a8 == answerSet2.a8) {
        total++;
        cat2++;
    }
    if (answerSet1.a9 == answerSet2.a9) {
        total++;
        cat2++;
    }
    if (answerSet1.a10 == answerSet2.a10) {
        total++;
        cat2++;
    }
    if (answerSet1.a11 == answerSet2.a11) {
        total++;
        cat3++;
    }
    if (answerSet1.a12 == answerSet2.a12) {
        total++;
        cat3++;
    }
    if (answerSet1.a13 == answerSet2.a13) {
        total++;
        cat3++;
    }
    if (answerSet1.a14 == answerSet2.a14) {
        total++;
        cat3++;
    }
    if (answerSet1.a15 == answerSet2.a15) {
        total++;
        cat3++;
    }
    if (answerSet1.a16 == answerSet2.a16) {
        total++;
        cat4++;
    }
    if (answerSet1.a17 == answerSet2.a17) {
        total++;
        cat4++;
    }
    if (answerSet1.a18 == answerSet2.a18) {
        total++;
        cat4++;
    }
    if (answerSet1.a19 == answerSet2.a19) {
        total++;
        cat4++;
    }
    if (answerSet1.a20 == answerSet2.a20) {
        total++;
        cat4++;
    }
    if (answerSet1.a21 == answerSet2.a21) {
        total++;
        cat5++;
    }
    if (answerSet1.a22 == answerSet2.a22) {
        total++;
        cat5++;
    }
    if (answerSet1.a23 == answerSet2.a23) {
        total++;
        cat5++;
    }
    if (answerSet1.a24 == answerSet2.a24) {
        total++;
        cat5++;
    }
    if (answerSet1.a25 == answerSet2.a25) {
        total++;
        cat5++;
    }
    
    let heartValues = {
        total: (total / 25),
        category1: (cat1 / 5),
        category2: (cat2 / 5),
        category3: (cat3 / 5),
        category4: (cat4 / 5),
        category5: (cat5 / 5)
    };
    
    res.json(heartValues);

});

module.exports = router;