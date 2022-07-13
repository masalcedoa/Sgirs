const { Router } = require('express');
const router = Router();

//const { rederAskForm, createNewAsk, renderAsk, renderEditAskForm, updateFormAsk, deleteAsk, updateAsk } = require('../controllers/notes.controller');
const { create,rederrAskForm,createNewrAsk,renderrAsk,renderEditrAskForm,updaterAsk, deleterAsk  } = require('../controllers/registroPreguntas.controller');

const { isAuthenticated } = require('../helpers/auth');

//New Notes
console.log("Ruta con autenticacion");
router.get('/rasks/add' ,isAuthenticated, rederrAskForm);

//router.post('/rasks/new-rask', isAuthenticated, createNewrAsk);

router.post('/rasks/new-rask', isAuthenticated, createNewrAsk);

//Get all Notes
router.get('/rasks', isAuthenticated, renderrAsk);

//edit notes
router.get('/rasks/edit/:id', isAuthenticated, renderEditrAskForm);
//router.put('/notes/edit/:id', updateForm);
//console.log('nicia update');
router.put('/rasks/edit-ask/:id',isAuthenticated,  updaterAsk);

//delete notes
router.delete('/rasks/delete/:id', deleterAsk);


/*router.get("/images/:image_id", imageCtrl.Index);
router.post("/images", imageCtrl.create);
router.post("/images/:image_id/like", imageCtrl.like);
router.post("/images/:image_id/comment", imageCtrl.comment);
router.delete("/images/:image_id", imageCtrl.remove);*/

module.exports = router;