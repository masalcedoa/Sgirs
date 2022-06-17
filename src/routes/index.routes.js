const { Router } = require("express");

const res = require("express/lib/response");


const { renderIndex, renderAbout } = require('../controllers/index.controller');
const router = Router();

console.log('routes ini');

router.get("/", renderIndex);
router.get("/about", renderAbout);


/*router.get('/' , (req,res) => {
    res.render('index')
});

router.get('/about' , (req,res) => {
    res.render('about')
});*/

module.exports = router;