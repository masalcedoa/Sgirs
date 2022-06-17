const res = require("express/lib/response");
const Sector = require("../models/Sector");
const sectorCtrl = {};

sectorCtrl.renderSectorForm = (req, res) => {
    //res.send('Sector add');
    console.log(req.body);
    //const Sectors = await Sector.find();
    const { descripcion } = req.body;
    //const newSector = new Sector({title: title, description: description});


    res.render('sector/new-sector');
}

sectorCtrl.createNewSector = async (req, res) => {
    console.log(req.body);
    const { CodSector, Descripcion } = req.body;

    const errors = [];
    if (!CodSector) {
        errors.push({ text: "Por favor escriba el código de sector" });
    }
    if (!Descripcion) {
        errors.push({ text: "Por favor escriba descripcion" });
    }
    if (errors.length > 0) {
        res.render("sector/new-sector", {
            errors,
            CodSector,
            Descripcion,
        });
    } else {
        const newSector = new Sector({ CodSector, Descripcion });
       // console.log(req.user.id);
        newSector.user = req.user.id;
        await newSector.save();
        req.flash("success_msg", "Sector Added Successfully");
        res.redirect("/sector");
    }

}

sectorCtrl.renderSector = async (req, res) => {
    //res.send('Render Sectors');
    //const sectores = await Sector.find({ user: req.user.id })
    const sectores = await Sector.find()
    .sort({ date: "desc" })
    .lean();
  res.render("sector/all-sector", { sectores });
}

sectorCtrl.renderEditForm = async (req, res) => {
    const Sectores = await Sector.findById(req.params.id).lean();
    //const Sectores = await Sector.findOne(req.params.id).lean();

    console.log("Datos a editar:",Sectores.CodSector);

    /*if (Sector.user != req.user.id) {
      req.flash("error_msg", "Not Authorized");
      return res.redirect("/sector");
    }*/
    res.render("sector/edit-sector", { Sectores });
}

sectorCtrl.updateForm = (req, res) => {
    res.send('Update Edit Forms');
}


sectorCtrl.deleteSector = async (req, res) => {
    //res.send('delete Sectors');
    await Sector.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Sector Deleted Successfully");
    res.redirect("/sector");


}

sectorCtrl.updateSector = async (req, res) => {
    const { CodSector,Descripcion } = req.body;
    console.log("Antes de actualizar", req.body);
    await Sector.findByIdAndUpdate(req.params.id, { CodSector, Descripcion });
    console.log("update");
    req.flash("success_msg", "Sector Updated Successfully");
    res.redirect("/sector");
  };
  
module.exports = sectorCtrl;