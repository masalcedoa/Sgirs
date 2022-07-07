const res = require("express/lib/response");
const rAsk = require("../models/Pregunta");
//const rAnskers = require("../models/Respuesta");
const registro = require("../models/RegistroPregunta");
//const rAnskers = require("../models/preguntaRespuesta");
//const respuestasPreguntas = require("../models/PreguntaRespuesta");

//const respuestas = require("../models/Respuesta");
const respuestasPreguntas = require("../models/vrpreguntasgrs");

const raskCtrl = {};

const sector  = require("../models/Sector");

const { SigninValidRest } = require('../controllers/usuario.controller');



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


    const lPreguntas = await respuestasPreguntas.find({codSector : req.user.codSector})
    .sort({ idPregunta : "asc" })
    .lean();

    console.log("preguntas  devueltas: ", lPreguntas);
   //console.log("respuestas  devueltas: ", lrespuestas);
   /*
   console.log("respuestas  sector: ", req.user.codSector);
   console.log("Respuesta solo", lRespuestaSolo);*/
   

    //var lista = {};

   //lista = {lPreguntas,lRespuestas};

        res.render('rasks/new-rask',{ lPreguntas });
   //res.render('rasks/new-rask', lista );

}

raskCtrl.createNewrAsk = async (req, res) => {
    
    console.log("a crear registro :",req.body);

    var {P00000001,P00000002,P00000003,P00000004,
        P00000005,P00000006,P00000007,P00000008,P00000009,P00000010, P00000011,P00000012,P00000013,
        P00000014,P00000015,P00000016,P00000017, P00000018, P00000019,P00000020,P00000021,P00000017,P00000022,P00000023,P00000024,
        P00000025,P00000026,
        CodSector } = req.body;
    //console.log("Permite Archivo",indArchivo);
    //console.log("Permite Texto",indTexto);*/




    const errors = [];
   /* if (!idPregunta) {
        errors.push({ text: "Por favor escribir consecutivo" });

        
    }
    if (!pregunta) {
        errors.pus
        
        h({ text: "Por favor escribir la pregunta" });
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


    if (errors.length > 0) {
        res.render("rasks/new-rask", {
            errors,
            P00000001,P00000002,P00000003,P00000004,
            P00000005,P00000006,P00000007,P00000008,P00000009,P00000010, P00000011,P00000012,P00000013,
            P00000014,P00000015,P00000016,P00000017, P00000018, P00000019,P00000020,P00000021,P00000017,P00000022,P00000023,P00000024,
            P00000025,P00000026,
            CodSector
        });
    } else {

        


        const newRegistro = new registro({P00000001,P00000002,P00000003,P00000004,
            P00000005,P00000006,P00000007,P00000008,P00000009,P00000010, P00000011,P00000012,P00000013,
            P00000014,P00000015,P00000016,P00000017, P00000018, P00000019,P00000020,P00000021,P00000017,P00000022,P00000023,P00000024,
            P00000025,P00000026,
            CodSector});

            newRegistro.user = req.user.id;
            newRegistro.CodSector = req.user.codSector;

        console.log("registro a gabrar",newRegistro);
        


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
    const preguntas = await registro.find({ codSector: req.user.codSector })
    .sort({ date: "desc" })
    .lean();


  res.render("rasks/all-rask", { preguntas });
}

raskCtrl.renderEditrAskForm = async (req, res) => {
    const preguntas = await rAsk.findById(req.params.id).lean();
    if (preguntas.user != req.user.id) {
      req.flash("error_msg", "Not Authorized");
      return res.redirect("/rasks");
    }
    res.render("rasks/edit-rask", { preguntas });
}

raskCtrl.updaterAsk = (req, res) => {
    res.send('Update Edit Forms');
}


raskCtrl.deleterAsk = async (req, res) => {
    //res.send('delete rasks');
    await rAsk.findByIdAndDelete(req.params.id);
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
  
module.exports = raskCtrl;
