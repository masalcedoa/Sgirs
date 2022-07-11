const { Router } = require("express");

const res = require("express/lib/response");


const { renderIndex, renderAbout } = require('../controllers/index.controller');
const router = Router();

const imageCtrl = require("../controllers/image.controller");
const homeCtrl = require("../controllers/home.controller");


console.log('routes ini');

router.get("/", renderIndex);
router.get("/about", renderAbout);

/*router.get("/images/:image_id", imageCtrl.Index);
router.post("/images", imageCtrl.create);
router.post("/images/:image_id/like", imageCtrl.like);
router.post("/images/:image_id/comment", imageCtrl.comment);
router.delete("/images/:image_id", imageCtrl.remove);*/


/*router.get('/' , (req,res) => {
    res.render('index')
});

router.get('/about' , (req,res) => {
    res.render('about')
});*/

module.exports = router;