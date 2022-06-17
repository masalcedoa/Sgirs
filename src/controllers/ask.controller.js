const res = require("express/lib/response");
const Ask = require("../models/Pregunta");
const askCtrl = {};

askCtrl.rederAskForm = (req, res) => {
    //res.send('note add');
    console.log(req.body);
    //const asks = await Ask.find();
    const { idPregunta, pregunta, indArchivo, indTexto } = req.body;
    //const newAsk = new Ask({title: title, description: description});


    res.render('asks/new-ask');
}

askCtrl.createNewAsk = async (req, res) => {
    console.log(req.body);
    const { idPregunta, pregunta, indArchivo, indTexto } = req.body;
    console.log("Permite Archivo",indArchivo);
    console.log("Permite Texto",indTexto);


    const errors = [];
    if (!idPregunta) {
        errors.push({ text: "Por favor escribir consecutivo" });

        
    }
    if (!pregunta) {
        errors.push({ text: "Por favor escribir la pregunta" });
    }

    if (errors.length > 0) {
        res.render("asks/new-ask", {
            errors,
            idPregunta,
            pregunta,
            indArchivo,
            indTexto
        });
    } else {
        const newAsk = new Ask({ idPregunta,pregunta,indArchivo,indTexto});
        console.log("antes de grabar",req.user.id);
        newAsk.user = req.user.id;
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