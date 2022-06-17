const { Router } = require('express');
const router = Router();

const { rederPeriodoForm, createNewPeriodos, renderPeriodos, renderEditForm, updateForm, deletePeriodo, updatePeriodo } = require('../controllers/Periodo.controller');

const { isAuthenticated } = require('../helpers/auth');

//New Periodos
console.log("Ruta con autenticacion");
router.get('/Periodos/add' ,isAuthenticated, rederPeriodoForm);

router.post('/Periodos/new-Periodo', isAuthenticated, createNewPeriodos);

//Get all Periodos
router.get('/Periodos', isAuthenticated, renderPeriodos);

//edit Periodos
router.get('/Periodos/edit/:id', isAuthenticated, renderEditForm);
//router.put('/Periodos/edit/:id', updateForm);
//console.log('nicia update');
router.put('/Periodos/edit-Periodo/:id',isAuthenticated,  updatePeriodo);

//delete Periodos
router.delete('/Periodos/delete/:id', deletePeriodo);

module.exports = router;