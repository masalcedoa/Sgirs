const res = require("express/lib/response");
const rAsk = require("../models/Pregunta");
const registro = require("../models/Registroindicador");
const vIndicador = require("../models/vIndicators");

const raskCtrl = {};


const sector = require("../models/Sector");
//const { SigninValidRest } = require('../controllers/usuario.controller');



raskCtrl.rederrAskForm = async (req, res) => {
  console.log("cuenta que consulta:", req.user.correo);
  console.log("cuenta que consulta indicador CodSector:", req.user.codSector, req.user.periodo);


  const lPreguntas = await vIndicador.find({ idSector: req.user.codSector, periodo: req.user.periodo})
    .sort({ idIndicador: "asc" })
    .lean();

  console.log("preguntas  devueltas: ", lPreguntas);


  const cPreguntasA2 = 0;
  var cAdd = "SI";
  const cInfo2 = [];
  


 if (req.user.codSector != "SEC004") {

    const cPreguntasA2 = await registro.find({ idSector: req.user.codSector, periodo: req.user.periodo, user : req.user.correo }).count()

  console.log("validacion de cantidad de indicadores in if",cPreguntasA2 );
 /* if (cPreguntasA2 > 0) {
    cInfo2.push({ text: "ya existen indicadores para el periodo seleccionado inf" });
    cAdd = "NO";
  }*/

  if (cPreguntasA2 <= 0) {
    cAdd = "SI";
    cInfo2.pop();
    console.log("entre a cargar si",cPreguntasA2);

  } else {
    console.log("entre a cargar NO",cPreguntasA2);
    cInfo2.push({ text: "ya existen preguntas para el periodo seleccionado" });
    cAdd = "NO";
  }





}  


if (cInfo2.length > 0) {
  res.render("index", {
    cInfo2
  });
  req.flash("error_msg", "ya existen indicadores para el periodo seleccionado");
  res.redirect("/");

} else {
    res.render('rindicators/new-rask', { lPreguntas });
  console.log("Termine de renderizar");
  }
  //res.render('rIndicators/new-rask', { lPreguntas });
  console.log("Termine de renderizar");
}

raskCtrl.createNewrAsk = async (req, res) => {

  //console.log("Inicio Create");


  //console.log("a crear registro :", req.body);





  var {
    IND0000001,
    IND0000002,
    IND0000003,
    IND0000004,
    IND0000005,
    IND0000006,
    IND0000007,
    IND0000008,
    IND0000009,
    IND0000010,
    IND0000011,
    IND0000012,
    VAR0000001,
    VAR0000002,
    VAR0000003,
    VAR0000004,
    VAR0000005,
    VAR0000006,
    VAR0000007,
    VAR0000008,
    VAR0000009,
    VAR0000010,
    VAR0000011,
    VAR0000012,
    VAR0000013,
    VAR0000014,
    VAR0000015,
    VAR0000016,
    VAR0000017,
    VAR0000018,
    VAR0000019,
    VAR0000020,
    VAR0000021,
    VAR0000022,
    VAR0000023,
    VAR0000024,
    VAR0000025,
    VAR0000001_IND0000001,
    VAR0000002_IND0000001,
    VAR0000003_IND0000001, VAR0000004_IND0000001, VAR0000005_IND0000001, VAR0000006_IND0000001,
    VAR0000007_IND0000001, VAR0000008_IND0000001, VAR0000009_IND0000001, VAR0000010_IND0000001,
    VAR0000011_IND0000001, VAR0000012_IND0000001, VAR0000013_IND0000001, VAR0000014_IND0000001,
    VAR0000015_IND0000001, VAR0000016_IND0000001, VAR0000017_IND0000001, VAR0000018_IND0000001,
    VAR0000019_IND0000001, VAR0000020_IND0000001,
    VAR0000001_IND0000002, VAR0000002_IND0000002, VAR0000003_IND0000002, VAR0000004_IND0000002,
    VAR0000005_IND0000002, VAR0000006_IND0000002
    , VAR0000007_IND0000002
    , VAR0000008_IND0000002
    , VAR0000009_IND0000002
    , VAR0000010_IND0000002
    , VAR0000011_IND0000002
    , VAR0000012_IND0000002
    , VAR0000013_IND0000002
    , VAR0000014_IND0000002
    , VAR0000015_IND0000002
    , VAR0000016_IND0000002
    , VAR0000017_IND0000002
    , VAR0000018_IND0000002
    , VAR0000019_IND0000002
    , VAR0000020_IND0000002
    ,
    VAR0000001_IND0000003
    , VAR0000002_IND0000003
    , VAR0000003_IND0000003
    , VAR0000004_IND0000003
    , VAR0000005_IND0000003
    , VAR0000006_IND0000003
    , VAR0000007_IND0000003
    , VAR0000008_IND0000003
    , VAR0000009_IND0000003
    , VAR0000010_IND0000003
    , VAR0000011_IND0000003
    , VAR0000012_IND0000003
    , VAR0000013_IND0000003
    , VAR0000014_IND0000003
    , VAR0000015_IND0000003
    , VAR0000016_IND0000003
    , VAR0000017_IND0000003
    , VAR0000018_IND0000003
    , VAR0000019_IND0000003
    , VAR0000020_IND0000003
    ,
    VAR0000001_IND0000004
    , VAR0000002_IND0000004
    , VAR0000003_IND0000004
    , VAR0000004_IND0000004
    , VAR0000005_IND0000004
    , VAR0000006_IND0000004
    , VAR0000007_IND0000004
    , VAR0000008_IND0000004
    , VAR0000009_IND0000004
    , VAR0000010_IND0000004
    , VAR0000011_IND0000004
    , VAR0000012_IND0000004
    , VAR0000013_IND0000004
    , VAR0000014_IND0000004
    , VAR0000015_IND0000004
    , VAR0000016_IND0000004
    , VAR0000017_IND0000004
    , VAR0000018_IND0000004
    , VAR0000019_IND0000004
    , VAR0000020_IND0000004
    , VAR0000001_IND0000005
    , VAR0000002_IND0000005
    , VAR0000003_IND0000005
    , VAR0000004_IND0000005
    , VAR0000005_IND0000005
    , VAR0000006_IND0000005
    , VAR0000007_IND0000005
    , VAR0000008_IND0000005
    , VAR0000009_IND0000005
    , VAR0000010_IND0000005
    , VAR0000011_IND0000005
    , VAR0000012_IND0000005
    , VAR0000013_IND0000005
    , VAR0000014_IND0000005
    , VAR0000015_IND0000005
    , VAR0000016_IND0000005
    , VAR0000017_IND0000005
    , VAR0000018_IND0000005
    , VAR0000019_IND0000005
    , VAR0000020_IND0000005
    , VAR0000001_IND0000006
    , VAR0000002_IND0000006
    , VAR0000003_IND0000006
    , VAR0000004_IND0000006
    , VAR0000005_IND0000006
    , VAR0000006_IND0000006
    , VAR0000007_IND0000006
    , VAR0000008_IND0000006
    , VAR0000009_IND0000006
    , VAR0000010_IND0000006
    , VAR0000011_IND0000006
    , VAR0000012_IND0000006
    , VAR0000013_IND0000006
    , VAR0000014_IND0000006
    , VAR0000015_IND0000006
    , VAR0000016_IND0000006
    , VAR0000017_IND0000006
    , VAR0000018_IND0000006
    , VAR0000019_IND0000006
    , VAR0000020_IND0000006
    , VAR0000001_IND0000007
    , VAR0000002_IND0000007
    , VAR0000003_IND0000007
    , VAR0000004_IND0000007
    , VAR0000005_IND0000007
    , VAR0000006_IND0000007
    , VAR0000007_IND0000007
    , VAR0000008_IND0000007
    , VAR0000009_IND0000007
    , VAR0000010_IND0000007
    , VAR0000011_IND0000007
    , VAR0000012_IND0000007
    , VAR0000013_IND0000007
    , VAR0000014_IND0000007
    , VAR0000015_IND0000007
    , VAR0000016_IND0000007
    , VAR0000017_IND0000007
    , VAR0000018_IND0000007
    , VAR0000019_IND0000007
    , VAR0000020_IND0000007
    , VAR0000001_IND0000008
    , VAR0000002_IND0000008
    , VAR0000003_IND0000008
    , VAR0000004_IND0000008
    , VAR0000005_IND0000008
    , VAR0000006_IND0000008
    , VAR0000007_IND0000008
    , VAR0000008_IND0000008
    , VAR0000009_IND0000008
    , VAR0000010_IND0000008
    , VAR0000011_IND0000008
    , VAR0000012_IND0000008
    , VAR0000013_IND0000008
    , VAR0000014_IND0000008
    , VAR0000015_IND0000008
    , VAR0000016_IND0000008
    , VAR0000017_IND0000008
    , VAR0000018_IND0000008
    , VAR0000019_IND0000008
    , VAR0000020_IND0000008
    , VAR0000001_IND0000009
    , VAR0000002_IND0000009
    , VAR0000003_IND0000009
    , VAR0000004_IND0000009
    , VAR0000005_IND0000009
    , VAR0000006_IND0000009
    , VAR0000007_IND0000009
    , VAR0000008_IND0000009
    , VAR0000009_IND0000009
    , VAR0000010_IND0000009
    , VAR0000011_IND0000009
    , VAR0000012_IND0000009
    , VAR0000013_IND0000009
    , VAR0000014_IND0000009
    , VAR0000015_IND0000009
    , VAR0000016_IND0000009
    , VAR0000017_IND0000009
    , VAR0000018_IND0000009
    , VAR0000019_IND0000009
    , VAR0000020_IND0000009
    , VAR0000001_IND0000010
    , VAR0000002_IND0000010
    , VAR0000003_IND0000010
    , VAR0000004_IND0000010
    , VAR0000005_IND0000010
    , VAR0000006_IND0000010
    , VAR0000007_IND0000010
    , VAR0000008_IND0000010
    , VAR0000009_IND0000010
    , VAR0000010_IND0000010
    , VAR0000011_IND0000010
    , VAR0000012_IND0000010
    , VAR0000013_IND0000010
    , VAR0000014_IND0000010
    , VAR0000015_IND0000010
    , VAR0000016_IND0000010
    , VAR0000017_IND0000010
    , VAR0000018_IND0000010
    , VAR0000019_IND0000010
    , VAR0000020_IND0000010
    , VAR0000021_IND0000000
    , VAR0000022_IND0000000
    , VAR0000023_IND0000000
    , VAR0000024_IND0000011
    , VAR0000025_IND0000012
    ,FOR0000000,
    FOR0000001,
    FOR0000002,
    FOR0000003,
    FOR0000004,
    FOR0000005,
    FOR0000006,
    FOR0000007,
    FOR0000008,
    FOR0000009,
    FOR0000010,
    FOR0000011,
    FOR0000012,
    opcion41,
    opcion42,
    opcion43,
    opcion44,
    opcion45,
    opcion46,
    opcion47,
    opcion48,
    aOpcion1,
    aOpcion2,
    aOpcion3,
    aOpcion4,
    aOpcion5,
    aOpcion6,
    aOpcion7,
    aOpcion8,
    VAR0000000_IND0000004,
    evento,
lugar,       
aforo


  } = req.body;

  const errors = [];



  if (errors.length > 0) {
    res.render("rIndicators/new-rask", {
      errors,
      IND0000001,
      IND0000002,
      IND0000003,
      IND0000004,
      IND0000005,
      IND0000006,
      IND0000007,
      IND0000008,
      IND0000009,
      IND0000010,
      IND0000011,
      IND0000012,
      VAR0000001,
      VAR0000002,
      VAR0000003,
      VAR0000004,
      VAR0000005,
      VAR0000006,
      VAR0000007,
      VAR0000008,
      VAR0000009,
      VAR0000010,
      VAR0000011,
      VAR0000012,
      VAR0000013,
      VAR0000014,
      VAR0000015,
      VAR0000016,
      VAR0000017,
      VAR0000018,
      VAR0000019,
      VAR0000020,
      VAR0000021,
      VAR0000022,
      VAR0000023,
      VAR0000024,
      VAR0000025,
      VAR0000001_IND0000001,
      VAR0000002_IND0000001,
      VAR0000003_IND0000001, VAR0000004_IND0000001, VAR0000005_IND0000001, VAR0000006_IND0000001,
      VAR0000007_IND0000001, VAR0000008_IND0000001, VAR0000009_IND0000001, VAR0000010_IND0000001,
      VAR0000011_IND0000001, VAR0000012_IND0000001, VAR0000013_IND0000001, VAR0000014_IND0000001,
      VAR0000015_IND0000001, VAR0000016_IND0000001, VAR0000017_IND0000001, VAR0000018_IND0000001,
      VAR0000019_IND0000001, VAR0000020_IND0000001,
      VAR0000001_IND0000002, VAR0000002_IND0000002, VAR0000003_IND0000002, VAR0000004_IND0000002,
      VAR0000005_IND0000002, VAR0000006_IND0000002
      , VAR0000007_IND0000002
      , VAR0000008_IND0000002
      , VAR0000009_IND0000002
      , VAR0000010_IND0000002
      , VAR0000011_IND0000002
      , VAR0000012_IND0000002
      , VAR0000013_IND0000002
      , VAR0000014_IND0000002
      , VAR0000015_IND0000002
      , VAR0000016_IND0000002
      , VAR0000017_IND0000002
      , VAR0000018_IND0000002
      , VAR0000019_IND0000002
      , VAR0000020_IND0000002
      ,
      VAR0000001_IND0000003
      , VAR0000002_IND0000003
      , VAR0000003_IND0000003
      , VAR0000004_IND0000003
      , VAR0000005_IND0000003
      , VAR0000006_IND0000003
      , VAR0000007_IND0000003
      , VAR0000008_IND0000003
      , VAR0000009_IND0000003
      , VAR0000010_IND0000003
      , VAR0000011_IND0000003
      , VAR0000012_IND0000003
      , VAR0000013_IND0000003
      , VAR0000014_IND0000003
      , VAR0000015_IND0000003
      , VAR0000016_IND0000003
      , VAR0000017_IND0000003
      , VAR0000018_IND0000003
      , VAR0000019_IND0000003
      , VAR0000020_IND0000003
      ,
      VAR0000001_IND0000004
      , VAR0000002_IND0000004
      , VAR0000003_IND0000004
      , VAR0000004_IND0000004
      , VAR0000005_IND0000004
      , VAR0000006_IND0000004
      , VAR0000007_IND0000004
      , VAR0000008_IND0000004
      , VAR0000009_IND0000004
      , VAR0000010_IND0000004
      , VAR0000011_IND0000004
      , VAR0000012_IND0000004
      , VAR0000013_IND0000004
      , VAR0000014_IND0000004
      , VAR0000015_IND0000004
      , VAR0000016_IND0000004
      , VAR0000017_IND0000004
      , VAR0000018_IND0000004
      , VAR0000019_IND0000004
      , VAR0000020_IND0000004
      ,
      VAR0000001_IND0000005
      , VAR0000002_IND0000005
      , VAR0000003_IND0000005
      , VAR0000004_IND0000005
      , VAR0000005_IND0000005
      , VAR0000006_IND0000005
      , VAR0000007_IND0000005
      , VAR0000008_IND0000005
      , VAR0000009_IND0000005
      , VAR0000010_IND0000005
      , VAR0000011_IND0000005
      , VAR0000012_IND0000005
      , VAR0000013_IND0000005
      , VAR0000014_IND0000005
      , VAR0000015_IND0000005
      , VAR0000016_IND0000005
      , VAR0000017_IND0000005
      , VAR0000018_IND0000005
      , VAR0000019_IND0000005
      , VAR0000020_IND0000005
      ,
      VAR0000001_IND0000006
      , VAR0000002_IND0000006
      , VAR0000003_IND0000006
      , VAR0000004_IND0000006
      , VAR0000005_IND0000006
      , VAR0000006_IND0000006
      , VAR0000007_IND0000006
      , VAR0000008_IND0000006
      , VAR0000009_IND0000006
      , VAR0000010_IND0000006
      , VAR0000011_IND0000006
      , VAR0000012_IND0000006
      , VAR0000013_IND0000006
      , VAR0000014_IND0000006
      , VAR0000015_IND0000006
      , VAR0000016_IND0000006
      , VAR0000017_IND0000006
      , VAR0000018_IND0000006
      , VAR0000019_IND0000006
      , VAR0000020_IND0000006
      ,
      VAR0000001_IND0000007
      , VAR0000002_IND0000007
      , VAR0000003_IND0000007
      , VAR0000004_IND0000007
      , VAR0000005_IND0000007
      , VAR0000006_IND0000007
      , VAR0000007_IND0000007
      , VAR0000008_IND0000007
      , VAR0000009_IND0000007
      , VAR0000010_IND0000007
      , VAR0000011_IND0000007
      , VAR0000012_IND0000007
      , VAR0000013_IND0000007
      , VAR0000014_IND0000007
      , VAR0000015_IND0000007
      , VAR0000016_IND0000007
      , VAR0000017_IND0000007
      , VAR0000018_IND0000007
      , VAR0000019_IND0000007
      , VAR0000020_IND0000007
      ,
      VAR0000001_IND0000008
      , VAR0000002_IND0000008
      , VAR0000003_IND0000008
      , VAR0000004_IND0000008
      , VAR0000005_IND0000008
      , VAR0000006_IND0000008
      , VAR0000007_IND0000008
      , VAR0000008_IND0000008
      , VAR0000009_IND0000008
      , VAR0000010_IND0000008
      , VAR0000011_IND0000008
      , VAR0000012_IND0000008
      , VAR0000013_IND0000008
      , VAR0000014_IND0000008
      , VAR0000015_IND0000008
      , VAR0000016_IND0000008
      , VAR0000017_IND0000008
      , VAR0000018_IND0000008
      , VAR0000019_IND0000008
      , VAR0000020_IND0000008
      ,
      VAR0000001_IND0000009
      , VAR0000002_IND0000009
      , VAR0000003_IND0000009
      , VAR0000004_IND0000009
      , VAR0000005_IND0000009
      , VAR0000006_IND0000009
      , VAR0000007_IND0000009
      , VAR0000008_IND0000009
      , VAR0000009_IND0000009
      , VAR0000010_IND0000009
      , VAR0000011_IND0000009
      , VAR0000012_IND0000009
      , VAR0000013_IND0000009
      , VAR0000014_IND0000009
      , VAR0000015_IND0000009
      , VAR0000016_IND0000009
      , VAR0000017_IND0000009
      , VAR0000018_IND0000009
      , VAR0000019_IND0000009
      , VAR0000020_IND0000009
      ,
      VAR0000001_IND0000010
      , VAR0000002_IND0000010
      , VAR0000003_IND0000010
      , VAR0000004_IND0000010
      , VAR0000005_IND0000010
      , VAR0000006_IND0000010
      , VAR0000007_IND0000010
      , VAR0000008_IND0000010
      , VAR0000009_IND0000010
      , VAR0000010_IND0000010
      , VAR0000011_IND0000010
      , VAR0000012_IND0000010
      , VAR0000013_IND0000010
      , VAR0000014_IND0000010
      , VAR0000015_IND0000010
      , VAR0000016_IND0000010
      , VAR0000017_IND0000010
      , VAR0000018_IND0000010
      , VAR0000019_IND0000010
      , VAR0000020_IND0000010
      , VAR0000021_IND0000000
      , VAR0000022_IND0000000
      , VAR0000023_IND0000000
      , VAR0000024_IND0000011
      , VAR0000025_IND0000012
      ,FOR0000000,
      FOR0000001,
      FOR0000002,
      FOR0000003,
      FOR0000004,
      FOR0000005,
      FOR0000006,
      FOR0000007,
      FOR0000008,
      FOR0000009,
      FOR0000010,
      FOR0000011,
      FOR0000012,
      opcion41,
      opcion42,
      opcion43,
      opcion44,
      opcion45,
      opcion46,
      opcion47,
      opcion48,
      aOpcion1,
      aOpcion2,
      aOpcion3,
      aOpcion4,
      aOpcion5,
      aOpcion6,
      aOpcion7,
      aOpcion8,
      VAR0000000_IND0000004,
      evento,
lugar,       
aforo

    });
  } else {









    const newRegistro = new registro({
      IND0000001,
      IND0000002,
      IND0000003,
      IND0000004,
      IND0000005,
      IND0000006,
      IND0000007,
      IND0000008,
      IND0000009,
      IND0000010,
      IND0000011,
      IND0000012,
      VAR0000001,
      VAR0000002,
      VAR0000003,
      VAR0000004,
      VAR0000005,
      VAR0000006,
      VAR0000007,
      VAR0000008,
      VAR0000009,
      VAR0000010,
      VAR0000011,
      VAR0000012,
      VAR0000013,
      VAR0000014,
      VAR0000015,
      VAR0000016,
      VAR0000017,
      VAR0000018,
      VAR0000019,
      VAR0000020,
      VAR0000021,
      VAR0000022,
      VAR0000023,
      VAR0000024,
      VAR0000025,
      VAR0000001_IND0000001,
      VAR0000002_IND0000001,
      VAR0000003_IND0000001, VAR0000004_IND0000001, VAR0000005_IND0000001, VAR0000006_IND0000001,
      VAR0000007_IND0000001, VAR0000008_IND0000001, VAR0000009_IND0000001, VAR0000010_IND0000001,
      VAR0000011_IND0000001, VAR0000012_IND0000001, VAR0000013_IND0000001, VAR0000014_IND0000001,
      VAR0000015_IND0000001, VAR0000016_IND0000001, VAR0000017_IND0000001, VAR0000018_IND0000001,
      VAR0000019_IND0000001, VAR0000020_IND0000001,
      VAR0000001_IND0000002, VAR0000002_IND0000002, VAR0000003_IND0000002, VAR0000004_IND0000002,
      VAR0000005_IND0000002, VAR0000006_IND0000002
      , VAR0000007_IND0000002
      , VAR0000008_IND0000002
      , VAR0000009_IND0000002
      , VAR0000010_IND0000002
      , VAR0000011_IND0000002
      , VAR0000012_IND0000002
      , VAR0000013_IND0000002
      , VAR0000014_IND0000002
      , VAR0000015_IND0000002
      , VAR0000016_IND0000002
      , VAR0000017_IND0000002
      , VAR0000018_IND0000002
      , VAR0000019_IND0000002
      , VAR0000020_IND0000002
      ,
      VAR0000001_IND0000003
      , VAR0000002_IND0000003
      , VAR0000003_IND0000003
      , VAR0000004_IND0000003
      , VAR0000005_IND0000003
      , VAR0000006_IND0000003
      , VAR0000007_IND0000003
      , VAR0000008_IND0000003
      , VAR0000009_IND0000003
      , VAR0000010_IND0000003
      , VAR0000011_IND0000003
      , VAR0000012_IND0000003
      , VAR0000013_IND0000003
      , VAR0000014_IND0000003
      , VAR0000015_IND0000003
      , VAR0000016_IND0000003
      , VAR0000017_IND0000003
      , VAR0000018_IND0000003
      , VAR0000019_IND0000003
      , VAR0000020_IND0000003
      ,
      VAR0000001_IND0000004
      , VAR0000002_IND0000004
      , VAR0000003_IND0000004
      , VAR0000004_IND0000004
      , VAR0000005_IND0000004
      , VAR0000006_IND0000004
      , VAR0000007_IND0000004
      , VAR0000008_IND0000004
      , VAR0000009_IND0000004
      , VAR0000010_IND0000004
      , VAR0000011_IND0000004
      , VAR0000012_IND0000004
      , VAR0000013_IND0000004
      , VAR0000014_IND0000004
      , VAR0000015_IND0000004
      , VAR0000016_IND0000004
      , VAR0000017_IND0000004
      , VAR0000018_IND0000004
      , VAR0000019_IND0000004
      , VAR0000020_IND0000004
      ,
      VAR0000001_IND0000005
      , VAR0000002_IND0000005
      , VAR0000003_IND0000005
      , VAR0000004_IND0000005
      , VAR0000005_IND0000005
      , VAR0000006_IND0000005
      , VAR0000007_IND0000005
      , VAR0000008_IND0000005
      , VAR0000009_IND0000005
      , VAR0000010_IND0000005
      , VAR0000011_IND0000005
      , VAR0000012_IND0000005
      , VAR0000013_IND0000005
      , VAR0000014_IND0000005
      , VAR0000015_IND0000005
      , VAR0000016_IND0000005
      , VAR0000017_IND0000005
      , VAR0000018_IND0000005
      , VAR0000019_IND0000005
      , VAR0000020_IND0000005
      ,
      VAR0000001_IND0000006
      , VAR0000002_IND0000006
      , VAR0000003_IND0000006
      , VAR0000004_IND0000006
      , VAR0000005_IND0000006
      , VAR0000006_IND0000006
      , VAR0000007_IND0000006
      , VAR0000008_IND0000006
      , VAR0000009_IND0000006
      , VAR0000010_IND0000006
      , VAR0000011_IND0000006
      , VAR0000012_IND0000006
      , VAR0000013_IND0000006
      , VAR0000014_IND0000006
      , VAR0000015_IND0000006
      , VAR0000016_IND0000006
      , VAR0000017_IND0000006
      , VAR0000018_IND0000006
      , VAR0000019_IND0000006
      , VAR0000020_IND0000006
      ,
      VAR0000001_IND0000007
      , VAR0000002_IND0000007
      , VAR0000003_IND0000007
      , VAR0000004_IND0000007
      , VAR0000005_IND0000007
      , VAR0000006_IND0000007
      , VAR0000007_IND0000007
      , VAR0000008_IND0000007
      , VAR0000009_IND0000007
      , VAR0000010_IND0000007
      , VAR0000011_IND0000007
      , VAR0000012_IND0000007
      , VAR0000013_IND0000007
      , VAR0000014_IND0000007
      , VAR0000015_IND0000007
      , VAR0000016_IND0000007
      , VAR0000017_IND0000007
      , VAR0000018_IND0000007
      , VAR0000019_IND0000007
      , VAR0000020_IND0000007
      ,
      VAR0000001_IND0000008
      , VAR0000002_IND0000008
      , VAR0000003_IND0000008
      , VAR0000004_IND0000008
      , VAR0000005_IND0000008
      , VAR0000006_IND0000008
      , VAR0000007_IND0000008
      , VAR0000008_IND0000008
      , VAR0000009_IND0000008
      , VAR0000010_IND0000008
      , VAR0000011_IND0000008
      , VAR0000012_IND0000008
      , VAR0000013_IND0000008
      , VAR0000014_IND0000008
      , VAR0000015_IND0000008
      , VAR0000016_IND0000008
      , VAR0000017_IND0000008
      , VAR0000018_IND0000008
      , VAR0000019_IND0000008
      , VAR0000020_IND0000008
      ,
      VAR0000001_IND0000009
      , VAR0000002_IND0000009
      , VAR0000003_IND0000009
      , VAR0000004_IND0000009
      , VAR0000005_IND0000009
      , VAR0000006_IND0000009
      , VAR0000007_IND0000009
      , VAR0000008_IND0000009
      , VAR0000009_IND0000009
      , VAR0000010_IND0000009
      , VAR0000011_IND0000009
      , VAR0000012_IND0000009
      , VAR0000013_IND0000009
      , VAR0000014_IND0000009
      , VAR0000015_IND0000009
      , VAR0000016_IND0000009
      , VAR0000017_IND0000009
      , VAR0000018_IND0000009
      , VAR0000019_IND0000009
      , VAR0000020_IND0000009
      ,
      VAR0000001_IND0000010
      , VAR0000002_IND0000010
      , VAR0000003_IND0000010
      , VAR0000004_IND0000010
      , VAR0000005_IND0000010
      , VAR0000006_IND0000010
      , VAR0000007_IND0000010
      , VAR0000008_IND0000010
      , VAR0000009_IND0000010
      , VAR0000010_IND0000010
      , VAR0000011_IND0000010
      , VAR0000012_IND0000010
      , VAR0000013_IND0000010
      , VAR0000014_IND0000010
      , VAR0000015_IND0000010
      , VAR0000016_IND0000010
      , VAR0000017_IND0000010
      , VAR0000018_IND0000010
      , VAR0000019_IND0000010
      , VAR0000020_IND0000010
      , VAR0000021_IND0000000
      , VAR0000022_IND0000000
      , VAR0000023_IND0000000
      , VAR0000024_IND0000011
      , VAR0000025_IND0000012
      ,FOR0000000,
      FOR0000001,
      FOR0000002,
      FOR0000003,
      FOR0000004,
      FOR0000005,
      FOR0000006,
      FOR0000007,
      FOR0000008,
      FOR0000009,
      FOR0000010,
      FOR0000011,
      FOR0000012,
      opcion41,
      opcion42,
      opcion43,
      opcion44,
      opcion45,
      opcion46,
      opcion47,
      opcion48,
      aOpcion1,
      aOpcion2,
      aOpcion3,
      aOpcion4,
      aOpcion5,
      aOpcion6,
      aOpcion7,
      aOpcion8,
      VAR0000000_IND0000004,
      evento,
lugar,       
aforo
    });

    //newRegistro.user = req.user.id;
    newRegistro.user = req.user.correo;
    newRegistro.idSector = req.user.codSector;
    newRegistro.periodo = req.user.periodo;
    console.log("periodo a grabar", req.user.periodo);
    console.log("antes de cargar la formula", req.body.VAR0000001_IND0000001);
    var f1 = 0.0;
    var f2 = 0.0;
    //f1

    if (req.body.IND0000001) {
      var f1 = req.body.VAR0000001_IND0000001;
      var f2 = req.body.VAR0000002_IND0000001;
      var f3 = ((f1 / f2) * 100);

      newRegistro.FOR0000001 = f3.toFixed(2);
    }

    if (req.body.IND0000002) {
      var f1 = req.body.VAR0000003_IND0000002;
      var f2 = req.body.VAR0000004_IND0000002;
      var f3 = ((f1 / f2) * 100);

      newRegistro.FOR0000002 = f3.toFixed(2);
    }

    if (req.body.IND0000003) {

      newRegistro.FOR0000003 = req.body.VAR0000005_IND0000003;
    }

    if (req.body.IND0000005) {
      var f1 = req.body.VAR0000009_IND0000005;
      var f2 = req.body.VAR0000010_IND0000005;
      var f3 = ((f1 / f2) * 100);

      newRegistro.FOR0000005 = f3.toFixed(2);
    }

    if (req.body.IND0000006) {
      var f1 = req.body.VAR0000011_IND0000006;
      var f2 = req.body.VAR0000012_IND0000006;
      var f3 = ((f1 / f2) * 100);

      newRegistro.FOR0000006 = f3.toFixed(2);
    }


    if (req.body.IND0000007) {
      var f1 = req.body.VAR0000013_IND0000007;
      var f2 = req.body.VAR0000014_IND0000007;
      var f3 = ((f1 / f2) * 100);

      newRegistro.FOR0000007 = f3.toFixed(2);
    }


    if (req.body.IND0000008) {
      var f1 = req.body.VAR0000015_IND0000008;
      var f2 = req.body.VAR0000016_IND0000008;
      var f3 = ((f1 / f2) * 100);

      newRegistro.FOR0000008 = f3.toFixed(2);
    }

    if (req.body.IND0000009) {
      var f1 = req.body.VAR0000015_IND0000008;
      var f2 = req.body.VAR0000016_IND0000008;
      var f3 = ((f1 / f2) * 100);

      newRegistro.FOR0000009 = f3.toFixed(2);
    }

    //console.log("registro a gabrar",newRegistro);

    console.log("cargar de uar",req.body);

    var uar = "No Cumple";
    var contYes = 0; 
    var contNo = 0;

    // 2022-09-15.ini
      

        if (req.body.opcion41 == "SI") {
          contYes = contYes + 1;
        }
        else {
          contNo = contNo + 1;
        }

        
        if (req.body.opcion42 == "SI") {
          contYes = contYes + 1;
        }
        else {
          contNo = contNo + 1;
        }

        if (req.body.opcion43 == "SI") {
          contYes = contYes + 1;
        }
        else {
          contNo = contNo + 1;
        }

        if (req.body.opcion44 == "SI") {
          contYes = contYes + 1;
        }
        else {
          contNo = contNo + 1;
        }


        if (req.body.opcion45 == "SI") {
          contYes = contYes + 1;
        }
        else {
          contNo = contNo + 1;
        }

        if (req.body.opcion46 == "SI") {
          contYes = contYes + 1;
        }
        else {
          contNo = contNo + 1;
        }

        if (req.body.opcion47 == "SI") {
          contYes = contYes + 1;
        }
        else {
          contNo = contNo + 1;
        }

        if (req.body.opcion48 == "SI") {
          contYes = contYes + 1;
        }
        else {
          contNo = contNo + 1;
        }

      var vuar = ((contYes / 8) * 100);


      if ((!req.body.IND0000011) || (!req.body.IND0000011)) {

      console.log("entre a evaluar uar");


      if (vuar == 100) {
        newRegistro.VAR0000000_IND0000004 = "Cumple totalmente";
      }else if (vuar >= 60 ){
        newRegistro.VAR0000000_IND0000004 = "Cumple parcialmente";
      } else {
        newRegistro.VAR0000000_IND0000004 = "No cumple";
      }

    } 



     
    // 2022-09-15.fin



    //console.log("antes de grabar",req.user.id);
    //newrAsk.user = req.user.id;
    await newRegistro.save();


    req.flash("success_msg", "rAsk Added Successfully");
    res.redirect("/rIndicators");
  }

}

raskCtrl.renderrAsk = async (req, res) => {
  //res.send('Render rIndicators');
  //const preguntas = await rAsk.find({ user: req.user.id })
  const preguntas = await registro.find({ idSector: req.user.codSector, user: req.user.correo, periodo: req.user.periodo })
    .sort({ createdAt: "desc" })
    .lean();


    console.log("consulta de indicadores",req.user,preguntas);

  res.render("rIndicators/all-rask", { preguntas });
}

raskCtrl.renderEditrAskForm = async (req, res) => {
  const preguntas = await registro.findById(req.params.id).lean();

  console.log("cuenta a editar user req", req.user.correo, req.params.id);
  console.log("cuenta a editar user indicators", preguntas);

  if (preguntas.user != req.user.correo) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/rIndicators");
  }
  res.render("rIndicators/edit-rask", { preguntas });
}

raskCtrl.updaterAsk = (req, res) => {
  res.send('Update Edit Forms');
}

raskCtrl.DownloadFile = (req, res) => {
  console.log("archivo de descarga1:", req.body);
  console.log("archivo de descarga:", req.param.id);
  res.download('./uploads/' + req.body.filename);
}

raskCtrl.deleterAsk = async (req, res) => {
  //res.send('delete rIndicators');
  await registro.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "rAsk Deleted Successfully");
  res.redirect("/rIndicators");


}


raskCtrl.updaterAsk = async (req, res) => {
  const { title, description } = req.body;
  await rAsk.findByIdAndUpdate(req.params.id, { title, description });
  console.log("update");
  req.flash("success_msg", "rAsk Updated Successfully");
  res.redirect("/rIndicators");
};



/*raskCtrl.create = (req, res) => {
  const saveImage = async () => {


    console.log(req.body);
    console.log(req.file);

    const imgUrl = randomNumber;
    //const images = await Image.find({ filename: imgUrl });


    if (3 > 4) {
      saveImage();
    } else {
      // Image Location
      const imageTempPath = req.file.path;
      const ext = path.extname(req.file.originalname).toLowerCase();
      const targetPath = path.resolve(`./uploads/${imgUrl}${ext}`);

      // Validate Extension
      if (
        ext === ".png" ||
        ext === ".jpg" ||
        ext === ".jpeg" ||
        ext === ".gif"
      ) {
        // you wil need the public/temp path or this will throw an error
        console.log("fs.rename");

        await fs.rename(imageTempPath, targetPath);


        var { P00000001, P00000001_T, P00000001_D,
          P00000002, P00000002_T, P00000002_D,
          P00000003, P00000003_T, P00000003_D,
          P00000004, P00000004_T, P00000004_D,
          P00000005, P00000005_T, P00000005_D,
          P00000006, P00000006_T, P00000006_D,
          P00000007, P00000007_T, P00000007_D,
          P00000008, P00000008_T, P00000008_D,
          P00000009, P00000009_T, P00000009_D,
          P00000010, P00000010_T, P00000010_D,
          P00000011, P00000011_T, P00000011_D,
          P00000012, P00000012_T, P00000012_D,
          P00000013, P00000013_T, P00000013_D,
          P00000014, P00000014_T, P00000014_D,
          P00000015, P00000015_T, P00000015_D,
          P00000016, P00000016_T, P00000016_D,
          P00000017, P00000017_T, P00000017_D,
          P00000018, P00000018_T, P00000018_D,
          P00000019, P00000019_T, P00000019_D,
          P00000020, P00000020_T, P00000020_D,
          P00000021, P00000021_T, P00000021_D,
          P00000017, P00000017_T, P00000017_D,
          P00000022, P00000022_T, P00000022_D,
          P00000023, P00000023_T, P00000023_D,
          P00000024, P00000024_T, P00000024_D,
          P00000025, P00000025_T, P00000025_D,
          P00000026, P00000026_T, P00000026_D,
          opcion, CodSector } = req.body;

        const errors = [];

        if (errors.length > 0) {
          res.render("rIndicators/new-rask", {
            errors,
            P00000001, P00000001_T, P00000001_D,
            P00000002, P00000002_T, P00000002_D,
            P00000003, P00000003_T, P00000003_D,
            P00000004, P00000004_T, P00000004_D,
            P00000005, P00000005_T, P00000005_D,
            P00000006, P00000006_T, P00000006_D,
            P00000007, P00000007_T, P00000007_D,
            P00000008, P00000008_T, P00000008_D,
            P00000009, P00000009_T, P00000009_D,
            P00000010, P00000010_T, P00000010_D,
            P00000011, P00000011_T, P00000011_D,
            P00000012, P00000012_T, P00000012_D,
            P00000013, P00000013_T, P00000013_D,
            P00000014, P00000014_T, P00000014_D,
            P00000015, P00000015_T, P00000015_D,
            P00000016, P00000016_T, P00000016_D,
            P00000017, P00000017_T, P00000017_D,
            P00000018, P00000018_T, P00000018_D,
            P00000019, P00000019_T, P00000019_D,
            P00000020, P00000020_T, P00000020_D,
            P00000021, P00000021_T, P00000021_D,
            P00000017, P00000017_T, P00000017_D,
            P00000022, P00000022_T, P00000022_D,
            P00000023, P00000023_T, P00000023_D,
            P00000024, P00000024_T, P00000024_D,
            P00000025, P00000025_T, P00000025_D,
            P00000026, P00000026_T, P00000026_D,
            opcion, CodSector
          });
        } else {

          // you wil need the public/temp path or this will throw an error
          //await fs.rename(imageTempPath, targetPath);
          const newRegistro = new registro({
            P00000001, P00000001_T, P00000001_D,
            P00000002, P00000002_T, P00000002_D,
            P00000003, P00000003_T, P00000003_D: imgUrl + ext,
            P00000004, P00000004_T, P00000004_D,
            P00000005, P00000005_T, P00000005_D,
            P00000006, P00000006_T, P00000006_D,
            P00000007, P00000007_T, P00000007_D,
            P00000008, P00000008_T, P00000008_D,
            P00000009, P00000009_T, P00000009_D,
            P00000010, P00000010_T, P00000010_D,
            P00000011, P00000011_T, P00000011_D,
            P00000012, P00000012_T, P00000012_D,
            P00000013, P00000013_T, P00000013_D,
            P00000014, P00000014_T, P00000014_D,
            P00000015, P00000015_T, P00000015_D,
            P00000016, P00000016_T, P00000016_D,
            P00000017, P00000017_T, P00000017_D,
            P00000018, P00000018_T, P00000018_D,
            P00000019, P00000019_T, P00000019_D,
            P00000020, P00000020_T, P00000020_D,
            P00000021, P00000021_T, P00000021_D,
            P00000017, P00000017_T, P00000017_D,
            P00000022, P00000022_T, P00000022_D,
            P00000023, P00000023_T, P00000023_D,
            P00000024, P00000024_T, P00000024_D,
            P00000025, P00000025_T, P00000025_D,
            P00000026, P00000026_T, P00000026_D,
            opcion, CodSector
          });

          newRegistro.user = req.user.id;
          newRegistro.CodSector = req.user.codSector;

          console.log("registro a gabrar", newRegistro);



          //console.log("antes de grabar",req.user.id);
          //newrAsk.user = req.user.id;
          await newRegistro.save();
          req.flash("success_msg", "rAsk Added Successfully");
          res.redirect("/rIndicators");


        }




      } else {
        await fs.unlink(imageTempPath);
        res.status(500).json({ error: "Only Images are allowed" });
      }
    }
  };

  saveImage();
};
*/
module.exports = raskCtrl;
