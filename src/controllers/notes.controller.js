const res = require("express/lib/response");
const Note = require("../models/Note");
const notesCtrl = {};

notesCtrl.rederNoteForm = (req, res) => {
    //res.send('note add');
    console.log(req.body);
    //const notes = await Note.find();
    const { title, description } = req.body;
    //const newNote = new Note({title: title, description: description});


    res.render('notes/new-note');
}

notesCtrl.createNewNotes = async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;

    const errors = [];
    if (!title) {
        errors.push({ text: "Please Write a Title." });
    }
    if (!description) {
        errors.push({ text: "Please Write a Description" });
    }
    if (errors.length > 0) {
        res.render("notes/new-note", {
            errors,
            title,
            description,
        });
    } else {
        const newNote = new Note({ title, description });
       // console.log(req.user.id);
        newNote.user = req.user.id;
        await newNote.save();
        req.flash("success_msg", "Note Added Successfully");
        res.redirect("/notes");
    }

}

notesCtrl.renderNotes = async (req, res) => {
    //res.send('Render Notes');
    const notes = await Note.find({ user: req.user.id })
    //const notes = await Note.find()
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
}

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    if (note.user != req.user.id) {
      req.flash("error_msg", "Not Authorized");
      return res.redirect("/notes");
    }
    res.render("notes/edit-note", { note });
}

notesCtrl.updateForm = (req, res) => {
    res.send('Update Edit Forms');
}


notesCtrl.deleteNote = async (req, res) => {
    //res.send('delete notes');
    await Note.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Deleted Successfully");
    res.redirect("/notes");


}

notesCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    console.log("update");
    req.flash("success_msg", "Note Updated Successfully");
    res.redirect("/notes");
  };
  
module.exports = notesCtrl;