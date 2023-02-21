const router = require('express').Router();


router.get('/', (req,res) => {
    //console.log('Log off route');
    req.app.locals.currentID = null;
    req.session.destroy( () => {
        res.redirect('/');
    })
})



module.exports = router;