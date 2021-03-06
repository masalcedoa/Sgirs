const res = require("express/lib/response");
const PeriodoC = require("../models/Periodo");
const PeriodosCtrl = {};

PeriodosCtrl.rederPeriodoForm = (req, res) => {
    //res.send('Periodo add');
    console.log(req.body);
    //const Periodos = await Periodo.find();
    const { Periodo, Descripcion, Estado } = req.body;
    //const newPeriodo = new Periodo({Periodo: Periodo, Descripcion: Descripcion});


    res.render('periodos/new-´periodo');
}

PeriodosCtrl.createNewPeriodos = async (req, res) => {
    console.log(req.body);
    const { Periodo, Descripcion, Estado } = req.body;

    const errors = [];
    if (!Periodo) {
        errors.push({ text: "Por favor digite el Periodo." });
    }
    if (!Descripcion) {
        errors.push({ text: "Por favor digite la Descripcion" });
    }
    if (errors.length > 0) {
        res.render("periodos/new-periodo", {
            errors,
            Periodo,
            Descripcion,
            Estado
        });
    } else {
        const newPeriodo = new PeriodoC({ Periodo, Descripcion, Estado });
       // console.log(req.user.id);
        newPeriodo.user = req.user.id;
        await newPeriodo.save();
        req.flash("success_msg", "Periodo Agregado Satisfactoriamente");
        res.redirect("/Periodos");
    }

}

PeriodosCtrl.renderPeriodos = async (req, res) => {
    //res.send('Render Periodos');
    //const Periodos = await PeriodoC.find({ user: req.user.id })
    const Periodos = await PeriodoC.find()
    //const Periodos = await Periodo.find()
    .sort({ date: "desc" })
    .lean();
  res.render("periodos/all-periodos", { Periodos });
}

PeriodosCtrl.renderEditForm = async (req, res) => {
    const Periodos = await PeriodoC.findById(req.params.id).lean();
    /*if (PeriodoC.user != req.user.id) {
      req.flash("error_msg", "Not Authorized");
      return res.redirect("/Periodos");
    }*/
    res.render("periodos/edit-periodo", { Periodos });
}

PeriodosCtrl.updateForm = (req, res) => {
    res.send('Update Edit Forms');
}


PeriodosCtrl.deletePeriodo = async (req, res) => {
    //res.send('delete Periodos');
    await PeriodoC.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Periodo Deleted Successfully");
    res.redirect("/periodos");


}

PeriodosCtrl.updatePeriodo = async (req, res) => {
    const { Periodo, Descripcion, Estado } = req.body;
    await PeriodoC.findByIdAndUpdate(req.params.id, { Periodo, Descripcion, Estado });
    console.log("update");
    req.flash("success_msg", "Periodo Updated Successfully");
    res.redirect("/periodos");
  };
  
module.exports = PeriodosCtrl;
