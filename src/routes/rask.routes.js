const { Router } = require('express');
const router = Router();

//const { rederAskForm, createNewAsk, renderAsk, renderEditAskForm, updateFormAsk, deleteAsk, updateAsk } = require('../controllers/notes.controller');
const { rederrAskForm,createNewrAsk,renderrAsk,renderEditrAskForm,updaterAsk, deleterAsk  } = require('../controllers/registroPreguntas.controller');

const { isAuthenticated } = require('../helpers/auth');

//New Notes
console.log("Ruta con autenticacion");
router.get('/rasks/add' ,isAuthenticated, rederrAskForm);

router.post('/rasks/new-ask', isAuthenticated, createNewrAsk);

//Get all Notes
router.get('/rasks', isAuthenticated, renderrAsk);

//edit notes
router.get('/rasks/edit/:id', isAuthenticated, renderEditrAskForm);
//router.put('/notes/edit/:id', updateForm);
//console.log('nicia update');
router.put('/rasks/edit-ask/:id',isAuthenticated,  updaterAsk);

//delete notes
router.delete('/rasks/delete/:id', deleterAsk);

module.exports = router;