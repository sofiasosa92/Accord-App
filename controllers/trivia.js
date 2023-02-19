const router = require('express').Router();
const {Question} = require('../models');

router.get('/', async (req, res) => {
    //Get all of the questions  (These were prepopulated in the schema.sql file since they are read only)
    try {
        // const energyData = await Question.findAll({
        //     where: {
        //         category: 1
        //     }
        // });
        // const attachmentData = await Question.findAll({
        //     where: {
        //         category: 2
        //     }
        // });
        // const moralData = await Question.findAll({
        //     where: {
        //         category: 3
        //     }
        // });
        // const haveyouData = await Question.findAll({
        //     where: {
        //         category: 4
        //     }
        // });
        // const lovelangData = await Question.findAll({
        //     where: {
        //         category: 5
        //     }
        // });
        // const energy = energyData.map(e => e.get({plain: true}));
        // const attachment = attachmentData.map(e => e.get({plain: true}));
        // const moral = moralData.map(e => e.get({plain: true}));
        // const haveyou = haveyouData.map(e => e.get({plain: true}));
        // const lovelang = lovelangData.map(e => e.get({plain: true}));
        const questionsData = await Question.findAll();
        console.log('\n\nInside\n\n');
        console.log(questionsData);
        const questions = await questionsData.map(e => e.get({plain: true}));
        console.log(questions);
        //res.render('trivia', {energy, layout: false});
        res.render('trivia', {questions, layout: false});
    } catch (err) {
        render('error', {err});
    }
    
    
})

module.exports = router;

/*
ry {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }

*/