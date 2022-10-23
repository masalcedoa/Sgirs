const res = require("express/lib/response");
const rAsk = require("../models/Pregunta");
//const rAnskers = require("../models/Respuesta");
const registro = require("../models/RegistroPregunta");
//const rAnskers = require("../models/preguntaRespuesta");
//const respuestasPreguntas = require("../models/PreguntaRespuesta");

//const respuestas = require("../models/Respuesta");
const respuestasPreguntas = require("../models/vrpreguntasgrs");

const raskCtrl = {};

const sector = require("../models/Sector");
const { SigninValidRest } = require('../controllers/usuario.controller');

const fs = require("fs-extra");
const path = require("path");
const md5 = require("md5");
const sidebar = require("../helpers/sidebar");
const { randomNumber } = require("../helpers/libs");
//const { Image, Comment } = require("../models/image");
//const fileupload = require("express-fileupload");

//const multer = require('multer');
//const upload = multer({ dest: 'uploads/' });
//const cpUpload = upload.fields([{ name: 'P00000001_D', maxCount: 1 }, { name: 'P00000002_D', maxCount: 1 }]);



raskCtrl.rederrAskForm = async (req, res) => {
  //res.send('note add');
  // console.log(req.body);

  //const rasks = await rAsk.find();
  //const { idPregunta, pregunta, indArchivo, indTexto } = req.body;
  //const lSectores = await sector.find().lean();

  //    console.log("carga de sectores antes");
  // console.log(lSectores);
  //const newrAsk = new rAsk({title: title, description: description});

  //console.log("valor de cod sector", req.user.codSector);

  //console.log("valor de ras", rAsk);
  /*const lrespuestas = await respuestasPreguntas.find()
   .sort({ respuesta : "desc" })
   .lean();*/

  //const lRespuestas = await respuestasPreguntas.find().lean();

  //const lRespuestaSolo = await respuestas.find().lean();

  console.log("cuenta que consulta:", req.user.correo);


  const lPreguntas = await respuestasPreguntas.find({ codSector: req.user.codSector, periodo: req.user.periodo})
    .sort({ idPregunta: "asc" })
    .lean();

  //console.log("preguntas  devueltas: ", lPreguntas);
  //console.log("respuestas  devueltas: ", lrespuestas);
  /*
  console.log("respuestas  sector: ", req.user.codSector);
  console.log("Respuesta solo", lRespuestaSolo);*/


  //var lista = {};

  //lista = {lPreguntas,lRespuestas};

  console.log("validacion de cantidad de preguntas out if" );

  const cPreguntasA = 0;
  var cAdd = "SI";
  const cInfo = [];
  
if (req.user.codSector != "SEC004") {

  console.log("antes de validacion de cantidad de preguntas in if",req.user );

  //const cPreguntasA = await registro.find({ codSector: req.user.codSector, periodo: req.user.periodo, user : req.user.correo }).count()


  const cPreguntasA = await registro.find({ CodSector: req.user.codSector, periodo: req.user.periodo, user : req.user.correo}).count();
  
  
  console.log("validacion de cantidad de preguntas in if",cPreguntasA );
  

  if (cPreguntasA <= 0) {
    cAdd = "SI";
    cInfo.pop();
    console.log("entre a cargar si",cPreguntasA);

  } else {
    console.log("entre a cargar NO",cPreguntasA);
    cInfo.push({ text: "ya existen preguntas para el periodo seleccionado" });
    cAdd = "NO";
  }
}

if (cInfo.length > 0) {
  res.render("index", {
    cInfo
  });
  req.flash("error_msg", "ya existen preguntas para el periodo seleccionado");
  res.redirect("/");

} else {
    res.render('rasks/new-rask', { lPreguntas });
  console.log("Termine de renderizar");
  }


console.log("va a agregar",cAdd);

/*if (cAdd == "SI") {
  res.render('rasks/new-rask', { lPreguntas });
  //res.render('rasks/new-rask', lista );

  console.log("Termine de renderizar");
}*/

}

raskCtrl.createNewrAsk = async (req, res) => {

  console.log("Inicio Create");
  //upload.single('image');
  //console.log("a crear registro :",req.body);
  //console.log("req.files.file:",req.files);
  //const imgUrl = randomNumber;
  //console.log(file.P00000001_D.path);
  //const imageTempPath = req.files['P00000001_D'][0].path;
  //console.log("imageTempPath:",imageTempPath);
  //const ext = path.extname(req.files['P00000001_D'][0].originalname).toLowerCase();
  //console.log("ext:",ext);
  //const targetPath = path.resolve(`./uploads/${imgUrl}${ext}`);
  //console.log("targetPath:",targetPath);


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
    P00000001_P,
    P00000002_P,
    P00000003_P,
    P00000004_P,
    P00000005_P,
    P00000006_P,
    P00000007_P,
    P00000008_P,
    P00000009_P,
    P00000010_P,
    P00000011_P,
    P00000012_P,
    P00000013_P,
    P00000014_P,
    P00000015_P,
    P00000016_P,
    P00000017_P,
    P00000018_P,
    P00000019_P,
    P00000020_P,
    P00000021_P,
    P00000022_P,
    P00000023_P,
    P00000024_P,
    P00000025_P,
    P00000026_P,
    P00000001_O,
    P00000002_O,
    P00000003_O,
    P00000004_O,
    P00000005_O,
    P00000006_O,
    P00000007_O,
    P00000008_O,
    P00000009_O,
    P00000010_O,
    P00000011_O,
    P00000012_O,
    P00000013_O,
    P00000014_O,
    P00000015_O,
    P00000016_O,
    P00000017_O,
    P00000018_O,
    P00000019_O,
    P00000020_O,
    P00000021_O,
    P00000022_O,
    P00000023_O,
    P00000024_O,
    P00000025_O,
    P00000026_O,
    CodSector } = req.body;
  //console.log("Permite Archivo",indArchivo);
  //console.log("Permite Texto",indTexto);*/

  const errors = [];
  /* if (!idPregunta) {
       errors.push({ text: "Por favor escribir consecutivo" });

       
   }
   if (!pregunta) {
       errors.push({ text: "Por favor escribir la pregunta" });
   }

   if (!indArchivo) {
       console.log("entro en indicativo de archivo let ",indArchivo);
   indArchivo = false; 
   }

   if (!indTexto) {
       console.log("entro en indicativo de texto let ",indArchivo);
   indTexto = false; 
   }*/


  // console.log("Permite Archivo 2",indArchivo);
  // console.log("Permite Texto 2",indTexto);
  console.log("validacion de cantidad de preguntas out if" );
  
/*if (req.user.periodo != "SEC004") {

  
  const cPreguntas = await registro.find({ codSector: req.user.codSector, periodo: req.user.periodo }).count()

  
  console.log("validacion de cantidad de preguntas in if",cPreguntas );
  if (cPreguntas > 0) {
    errors.push({ text: "ya existen preguntas para el periodo seleccionado" });
  }
}*/

  if (errors.length > 0) {
    res.render("rasks/new-rask", {
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
      P00000001_P,
      P00000002_P,
      P00000003_P,
      P00000004_P,
      P00000005_P,
      P00000006_P,
      P00000007_P,
      P00000008_P,
      P00000009_P,
      P00000010_P,
      P00000011_P,
      P00000012_P,
      P00000013_P,
      P00000014_P,
      P00000015_P,
      P00000016_P,
      P00000017_P,
      P00000018_P,
      P00000019_P,
      P00000020_P,
      P00000021_P,
      P00000022_P,
      P00000023_P,
      P00000024_P,
      P00000025_P,
      P00000026_P,
      OP0000001,
      P00000001_O,
      P00000002_O,
      P00000003_O,
      P00000004_O,
      P00000005_O,
      P00000006_O,
      P00000007_O,
      P00000008_O,
      P00000009_O,
      P00000010_O,
      P00000011_O,
      P00000012_O,
      P00000013_O,
      P00000014_O,
      P00000015_O,
      P00000016_O,
      P00000017_O,
      P00000018_O,
      P00000019_O,
      P00000020_O,
      P00000021_O,
      P00000022_O,
      P00000023_O,
      P00000024_O,
      P00000025_O,
      P00000026_O,
      CodSector
    });
  }
  else {

    // you wil need the public/temp path or this will throw an error
    // await fs.rename(imageTempPath, targetPath);
    const newRegistro = new registro({
      P00000001, P00000001_T,
      P00000002, P00000002_T,
      P00000003, P00000003_T,
      P00000004, P00000004_T,
      P00000005, P00000005_T,
      P00000006, P00000006_T,
      P00000007, P00000007_T,
      P00000008, P00000008_T,
      P00000009, P00000009_T,
      P00000010, P00000010_T,
      P00000011, P00000011_T,
      P00000012, P00000012_T,
      P00000013, P00000013_T,
      P00000014, P00000014_T,
      P00000015, P00000015_T,
      P00000016, P00000016_T,
      P00000017, P00000017_T,
      P00000018, P00000018_T,
      P00000019, P00000019_T,
      P00000020, P00000020_T,
      P00000021, P00000021_T,
      P00000022, P00000022_T,
      P00000023, P00000023_T,
      P00000024, P00000024_T,
      P00000025, P00000025_T,
      P00000026, P00000026_T,
      P00000001_P,
      P00000002_P,
      P00000003_P,
      P00000004_P,
      P00000005_P,
      P00000006_P,
      P00000007_P,
      P00000008_P,
      P00000009_P,
      P00000010_P,
      P00000011_P,
      P00000012_P,
      P00000013_P,
      P00000014_P,
      P00000015_P,
      P00000016_P,
      P00000017_P,
      P00000018_P,
      P00000019_P,
      P00000020_P,
      P00000021_P,
      P00000022_P,
      P00000023_P,
      P00000024_P,
      P00000025_P,
      P00000026_P,
      P00000001_O,
      P00000002_O,
      P00000003_O,
      P00000004_O,
      P00000005_O,
      P00000006_O,
      P00000007_O,
      P00000008_O,
      P00000009_O,
      P00000010_O,
      P00000011_O,
      P00000012_O,
      P00000013_O,
      P00000014_O,
      P00000015_O,
      P00000016_O,
      P00000017_O,
      P00000018_O,
      P00000019_O,
      P00000020_O,
      P00000021_O,
      P00000022_O,
      P00000023_O,
      P00000024_O,
      P00000025_O,
      P00000026_O,
      CodSector
    });

    //newRegistro.user = req.user.id;
    newRegistro.user = req.user.correo;
    newRegistro.CodSector = req.user.codSector;
    newRegistro.periodo = req.user.periodo;
    //console.log("periodo a grabar",req.user.periodo);

    for (const property in req.files) {
      //console.log('arreglo',`${property}: ${req.files[property]}`);
      if (property == "P00000001_D") {
        newRegistro.P00000001_D = req.files['P00000001_D'][0].filename;
      }

      if (property == "P00000002_D") {
        newRegistro.P00000002_D = req.files['P00000002_D'][0].filename;

      }

      if (property == "P00000003_D") {
        newRegistro.P00000003_D = req.files['P00000003_D'][0].filename;
      }

      if (property == "P00000004_D") {
        newRegistro.P00000004_D = req.files['P00000004_D'][0].filename;
      }

      if (property == "P00000005_D") {
        newRegistro.P00000005_D = req.files['P00000005_D'][0].filename;
      }

      if (property == "P00000006_D") {
        newRegistro.P00000006_D = req.files['P00000006_D'][0].filename;
      }

      if (property == "P00000007_D") {
        newRegistro.P00000007_D = req.files['P00000007_D'][0].filename;
      }

      if (property == "P00000008_D") {
        newRegistro.P00000008_D = req.files['P00000008_D'][0].filename;
      }


      if (property == "P00000009_D") {
        newRegistro.P00000001_D = req.files['P00000009_D'][0].filename;
      }

      if (property == "P00000009_D") {
        newRegistro.P00000009_D = req.files['P00000009_D'][0].filename;
      }

      if (property == "P00000010_D") {
        newRegistro.P00000010_D = req.files['P00000010_D'][0].filename;
      }


      if (property == "P00000011_D") {
        newRegistro.P00000011_D = req.files['P00000011_D'][0].filename;
      }

      if (property == "P00000012_D") {
        newRegistro.P00000012_D = req.files['P00000012_D'][0].filename;
      }

      if (property == "P00000013_D") {
        newRegistro.P00000013_D = req.files['P00000013_D'][0].filename;
      }

      if (property == "P00000014_D") {
        newRegistro.P00000014_D = req.files['P00000014_D'][0].filename;
      }

      if (property == "P00000015_D") {
        newRegistro.P00000015_D = req.files['P00000015_D'][0].filename;
      }

      if (property == "P00000016_D") {
        newRegistro.P00000016_D = req.files['P00000016_D'][0].filename;
      }

      if (property == "P00000017_D") {
        newRegistro.P00000017_D = req.files['P00000017_D'][0].filename;
      }

      if (property == "P00000018_D") {
        newRegistro.P00000018_D = req.files['P00000018_D'][0].filename;
      }

      if (property == "P00000019_D") {
        newRegistro.P00000019_D = req.files['P00000019_D'][0].filename;
      }

      if (property == "P00000020_D") {
        newRegistro.P00000020_D = req.files['P00000020_D'][0].filename;
      }

      if (property == "P00000021_D") {
        newRegistro.P00000021_D = req.files['P00000021_D'][0].filename;
      }

      if (property == "P00000022_D") {
        newRegistro.P00000022_D = req.files['P00000022_D'][0].filename;
      }

      if (property == "P00000023_D") {
        newRegistro.P00000023_D = req.files['P00000023_D'][0].filename;
      }

      if (property == "P00000024_D") {
        newRegistro.P00000024_D = req.files['P00000024_D'][0].filename;
      }

      if (property == "P00000025_D") {
        newRegistro.P00000025_D = req.files['P00000025_D'][0].filename;
      }

      if (property == "P00000026_D") {
        newRegistro.P00000026_D = req.files['P00000026_D'][0].filename;
      }

    }


    //console.log("registro a gabrar",newRegistro);



    //console.log("antes de grabar",req.user.id);
    //newrAsk.user = req.user.id;
    await newRegistro.save();
    req.flash("success_msg", "rAsk Added Successfully");
    res.redirect("/rasks");
  }

}

raskCtrl.renderrAsk = async (req, res) => {
  //res.send('Render rAsks');
  //const preguntas = await rAsk.find({ user: req.user.id })
  const preguntas = await registro.find({ codSector: req.user.codSector, user: req.user.correo, periodo: req.user.periodo })
    .sort({ createdAt: "desc" })
    .lean();


  res.render("rasks/all-rask", { preguntas });
}

raskCtrl.renderEditrAskForm = async (req, res) => {
  const preguntas = await registro.findById(req.params.id).lean();

  console.log("cuenta a editar", preguntas);
  console.log("cuenta a editar user req", req.user.correo);

  if (preguntas.user != req.user.correo) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/rasks");
  }
  res.render("rasks/edit-rask", { preguntas });
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
  //res.send('delete rasks');
  await registro.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "rAsk Deleted Successfully");
  res.redirect("/rasks");


}

raskCtrl.updaterAsk = async (req, res) => {
  const { title, description } = req.body;
  await rAsk.findByIdAndUpdate(req.params.id, { title, description });
  console.log("update");
  req.flash("success_msg", "rAsk Updated Successfully");
  res.redirect("/rasks");
};



raskCtrl.create = (req, res) => {
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
       // console.log("fs.rename");

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
          res.render("rasks/new-rask", {
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
          res.redirect("/rasks");


        }




      } else {
        await fs.unlink(imageTempPath);
        res.status(500).json({ error: "Only Images are allowed" });
      }
    }
  };

  saveImage();
};


module.exports = raskCtrl;
