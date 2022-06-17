const { Router } = require('express');
const router = Router();

const { rederNoteForm, createNewNotes, renderNotes, renderEditForm, updateForm, deleteNote, updateNote } = require('../controllers/notes.controller');

const { isAuthenticated } = require('../helpers/auth');

//New Notes
console.log("Ruta con autenticacion");
router.get('/notes/add' ,isAuthenticated, rederNoteForm);

router.post('/notes/new-note', isAuthenticated, createNewNotes);

//Get all Notes
router.get('/notes', isAuthenticated, renderNotes);

//edit notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
//router.put('/notes/edit/:id', updateForm);
console.log('nicia update');
router.put('/notes/edit-note/:id',isAuthenticated,  updateNote);

//delete notes
router.delete('/notes/delete/:id', deleteNote);

module.exports = router;