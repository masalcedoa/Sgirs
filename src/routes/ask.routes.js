const { Router } = require('express');
const router = Router();

//const { rederAskForm, createNewAsk, renderAsk, renderEditAskForm, updateFormAsk, deleteAsk, updateAsk } = require('../controllers/notes.controller');
const { createNewAsk,rederAskForm,updateAsk, renderEditAskForm, renderAsk, deleteAsk,  } = require('../controllers/ask.controller');

const { isAuthenticated } = require('../helpers/auth');

//New Notes
//console.log("Ruta con autenticacion");
router.get('/ask/add' ,isAuthenticated, rederAskForm);

router.post('/asks/new-ask', isAuthenticated, createNewAsk);

//Get all Notes
router.get('/asks', isAuthenticated, renderAsk);

//edit notes
router.get('/asks/edit/:id', isAuthenticated, renderEditAskForm);
//router.put('/notes/edit/:id', updateForm);
console.log('nicia update');
router.put('/asks/edit-ask/:id',isAuthenticated,  updateAsk);

//delete notes
router.delete('/asks/delete/:id', deleteAsk);

module.exports = router;