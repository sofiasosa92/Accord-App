const router = require('express').Router();
const signup = require('./signup.js')
const userCreate = require('./usercreate.js');
const enterCode = require('./entercode.js');
const genCode = require('./gencode.js');
const writeAnswers = require('./writeans.js');
const results = require('./results.js');


router.use('/signup', signup);
router.use('/usercreate', userCreate);
router.use('/entercode', enterCode);
router.use('/gencode', genCode);
router.use('/writeanswers', writeAnswers);
router.use('/results', results);
module.exports = router;
