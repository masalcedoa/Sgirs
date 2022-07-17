const { Router } = require('express');
const router = Router();

const { rederPeriodoForm, createNewPeriodos, renderPeriodos, renderEditForm, updateForm, deletePeriodo, updatePeriodo } = require('../controllers/periodo.controller');

const { isAuthenticated } = require('../helpers/auth');

//New Periodos
console.log("Ruta con autenticacion");
router.get('/periodos/add' ,isAuthenticated, rederPeriodoForm);

router.post('/periodos/new-periodo', isAuthenticated, createNewPeriodos);

//Get all Periodos
router.get('/periodos', isAuthenticated, renderPeriodos);

//edit Periodos
router.get('periodos/edit/:id', isAuthenticated, renderEditForm);
//router.put('/periodos/edit/:id', updateForm);
//console.log('nicia update');
router.put('/periodos/edit-periodo/:id',isAuthenticated,  updatePeriodo);

//delete Periodos
router.delete('periodos/delete/:id', deletePeriodo);

module.exports = router;
