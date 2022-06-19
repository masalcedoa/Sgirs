const res = require("express/lib/response");
const Ask = require("../models/Pregunta");
const askCtrl = {};

const sector = require("../models/Sector");

const usuario = require("../models/Usuario");


askCtrl.rederAskForm = async (req, res) => {
    //res.send('note add');
    console.log(req.body);

    //const asks = await Ask.find();
    const { idPregunta, pregunta, indArchivo, indTexto } = req.body;
    const lSectores = await sector.find().lean();
    //    console.log("carga de sectores antes");
    //console.log(lSectores);
    //const newAsk = new Ask({title: title, description: description});


    res.render('asks/new-ask', { lSectores });
}

askCtrl.createNewAsk = async (req, res) => {
    console.log(req.body);
    var { idPregunta, pregunta, indArchivo, indTexto, CodSector } = req.body;
    console.log("Permite Archivo", indArchivo);
    console.log("Permite Texto", indTexto);


    const errors = [];
    if (!idPregunta) {
        errors.push({ text: "Por favor escribir consecutivo" });


    }
    if (!pregunta) {
        errors.pus

        h({ text: "Por favor escribir la pregunta" });
    }

    if (!indArchivo) {
        console.log("entro en indicativo de archivo let ", indArchivo);
        indArchivo = false;
    }

    if (!indTexto) {
        console.log("entro en indicativo de texto let ", indArchivo);
        indTexto = false;
    }


    console.log("Permite Archivo 2", indArchivo);
    console.log("Permite Texto 2", indTexto);

    const { uSession } = require('../controllers/usuario.controller');

    if (errors.length > 0) {
        res.render("asks/new-ask", {
            errors,
            idPregunta,
            pregunta,
            indArchivo,
            indTexto,
            CodSector
        });
    } else {




        const newAsk = new Ask({ idPregunta, pregunta, indArchivo, indTexto, CodSector });
        // const { codSector} = usuario.findById({ correo: email });
        //const uSector = await Ask.findById(req.params.id).lean();

        //console.log("uSector",req.params.id);


        //console.log("antes de grabar",req.user.codSector);
        //console.log(codSector);
        newAsk.user = req.user.id;
        //console.log("id del que graba",req.user.id);
        //console.log("correo del que graba",req.user.correo);
        await newAsk.save();
        req.flash("success_msg", "Ask Added Successfully");
        res.redirect("/asks");
    }

}

askCtrl.renderAsk = async (req, res) => {
    //res.send('Render Asks');
    //const preguntas = await Ask.find({ user: req.user.id })
    const preguntas = await Ask.find()
        .sort({ date: "desc" })
        .lean();
    res.render("asks/all-ask", { preguntas });
}

askCtrl.renderEditAskForm = async (req, res) => {
    const preguntas = await Ask.findById(req.params.id).lean();
    if (preguntas.user != req.user.id) {
        req.flash("error_msg", "Not Authorized");
        return res.redirect("/asks");
    }
    res.render("asks/edit-ask", { preguntas });
}

askCtrl.updateAsk = (req, res) => {
    res.send('Update Edit Forms');
}


askCtrl.deleteAsk = async (req, res) => {
    //res.send('delete asks');
    await Ask.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Ask Deleted Successfully");
    res.redirect("/asks");


}

askCtrl.updateAsk = async (req, res) => {
    const { title, description } = req.body;
    await Ask.findByIdAndUpdate(req.params.id, { title, description });
    console.log("update");
    req.flash("success_msg", "Ask Updated Successfully");
    res.redirect("/asks");
};

module.exports = askCtrl;