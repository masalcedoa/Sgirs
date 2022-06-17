const { Router } = require('express');
const router = Router();

const { renderSectorForm, createNewSector, renderSector, renderEditForm, updateForm, deleteSector, updateSector } = require('../controllers/sector.controller');

const { isAuthenticated } = require('../helpers/auth');

//New Notes
console.log("Ruta con autenticacion");
router.get('/sector/add' ,isAuthenticated, renderSectorForm);

router.post('/sector/new-sector', isAuthenticated, createNewSector);

//Get all Notes
router.get('/sector', isAuthenticated, renderSector);

//edit notes
router.get('/sector/edit/:id', isAuthenticated, renderEditForm);
//router.put('/notes/edit/:id', updateForm);
console.log('nicia update sector');
router.put('/sector/edit-sector/:id',isAuthenticated,  updateSector);

//delete notes
router.delete('/sector/delete/:id', deleteSector);

module.exports = router;