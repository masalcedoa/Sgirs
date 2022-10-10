//React = require('react');
//ReactDOM = require('react-dom');

const usersCtrl = {};
const User  = require("../models/Usuario");
const passport= require("passport");
const session = require("express-session");

const sector  = require("../models/Sector");
const Periodo  = require("../models/Periodo");
const { redirect } = require("express/lib/response");

const fs = require("fs-extra");
const path = require( "path");
const md5 = require("md5");
const sidebar = require("../helpers/sidebar");
const { randomNumber } = require("../helpers/libs");



usersCtrl.renderSignUpForm = async (req, res) => {
  const lSectores = await sector.find().lean();




//console.log("Lista de Sectores",lSectores);

  res.render("usuario/signup",{lSectores});

};

usersCtrl.singup = async (req, res) => {
  let errors = [];

  
  const { documento_sgirs,responsable, direccion, contacto, correo, password, confirm_password, codSector, nit, generador } = req.body;

 

  console.log(req.body);
  console.log(req.files);
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match." });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters." });
  }




  if (errors.length > 0) {
    res.render("usuario/signup", {
      errors,
      responsable,
      direccion,
      contacto,
      correo,
      password,
      confirm_password,
      codSector,
      documento_sgirs,
      nit,
      generador
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ correo: correo });

    
    if (emailUser) {
      //console.log("compare correo");
      req.flash("error_msg", "The Email is already in use.");
      res.redirect("/usuario/signup");
    } else {
      // Saving a New User


      /*selecionado = codSector.options[codSector.selectedIndex].value;

      console.log('prueba dd: ',selecionado); */

      
//ReactDOM.render(<App />, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));


      //var select = React.Component.document.getElementById('codSector');
      //var value = select.options[select.selectedIndex].value;

      //codSector = seleccionado;

      
      const newUser = new User({ responsable, direccion, contacto,codSector, correo, password, nit, generador });
      newUser.password = await newUser.encryptPassword(password);

      for (const property in req.files) {


        if (property == "documento_sgirs") {
          newUser.documento_sgirs =  req.files['documento_sgirs'][0].filename;
        }
      }  


      await newUser.save();
      req.flash("success_msg", "You are registered.");
      res.redirect("/usuario/signin");
    }
  }
};

function actualizar() {
  var select = document.getElementById('codSector');
  var value = select.options[select.selectedIndex].value;
  console.log(value); // en
}

usersCtrl.renderSigninForm = async (req, res, User) => {

  const lSectores = await sector.find().lean();
  const lPeriodos = await Periodo.find({Estado:true}).lean();





 // console.log(lSectores);

  res.render("usuario/signin",{lPeriodos, lSectores});
  
 
  
};

/*usersCtrl.renderSigninForm = (req, res) => {

  const { correo,password } = req.body;
  console.log("autenticar antes:", req.body);
  res.render("usuario/signin");
};*/


usersCtrl.signin = passport.authenticate("local", {
  //successRedirect: "/",
  failureRedirect: "/usuario/signin",
  failureFlash: true,
});




/*usersCtrl.signin = async (req, res) => {


  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/usuario/signin",
    failureFlash: true,
  });

};*/


usersCtrl.SigninValidRest = async (req, res) => {



  //const { correo, codSector, Periodo } = req.body;

  const { correo } = req.body;

  //const cResult = await User.findOne({ correo: correo, codSector : codSector });

  const cResult = await User.findOne({ correo: correo});

  
  //console.log("Valid Result User:",cResult );

  
 

 // const uSession = cResult.correo;
  

  
  if (!cResult) {
    req.flash("success_msg", "Login failure");
    res.redirect("/usuario/signin");

  } 
  else {

    const uSession = cResult.correo;
    
    //actualiza periodo del usuario
    //console.log(req.params.id,Periodo);
   // await User.findOneAndUpdate({correo:correo}, { periodo : Periodo });
   // console.log("update");



    req.flash("success_msg", "Login Successfully");
    res.redirect("/usuario/signinrest");
  }



  //res.render("usuario/signin",{lPeriodos, lSectores});
 
 // res.render("usuario/signin");

  //req.flash("success_msg", "Login Successfully");
  //res.redirect("/");
};


usersCtrl.logout = (req, res) => {
    /*req.session.User = null;
    req.session.logout;
    session.logout;*/

//    res.redirect("/users/signin");

    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash("success_msg", "You are logged out now.");
      res.redirect('/');
    });
  
   // req.logout();
  //req.logout();
  //req.flash("success_msg", "You are logged out now.");
  //res.redirect("/usuario/signin");
};

usersCtrl.renderSigninFormRest = async (req, res, User) => {


  //console.log('Rest Validation - Begin - ',req.user);
  const lSectores = await sector.find({CodSector:req.user.codSector}).lean();
  const lPeriodos = await Periodo.find({Estado:true}).lean();

 // console.log(lSectores);

  res.render("usuario/signinrest",{lPeriodos, lSectores});
  
 
  
};

/*usersCtrl.renderSigninForm = (req, res) => {

  const { correo,password } = req.body;
  console.log("autenticar antes:", req.body);
  res.render("usuario/signin");
};*/


usersCtrl.signinrest = passport.authenticate("local", {
  //successRedirect: "/",
  failureRedirect: "/usuario/signinrest",
  failureFlash: true,
});




/*usersCtrl.signin = async (req, res) => {


  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/usuario/signin",
    failureFlash: true,
  });

};*/


usersCtrl.SigninValidRestRest = async (req, res) => {

console.log("req body",req.body);

console.log("req user",req.user);

  const { correo, codSector, Periodo } = req.body;

  const cResult = await User.findOne({ correo: req.user.correo, codSector : req.user.codSector });

  
  console.log("Valid Result User:",cResult );

  
 

 // const uSession = cResult.correo;
  

  
  if (!cResult) {
    req.flash("success_msg", "Login failure");
    res.redirect("/usuario/signin");

  } 
  else {

    const uSession = cResult.correo;
    
    //actualiza periodo del usuario
    //console.log(req.params.id,Periodo);
    await User.findOneAndUpdate({correo:correo}, { periodo : Periodo });
    console.log("update");



    req.flash("success_msg", "Login Successfully");
    res.redirect("/");
  }



  //res.render("usuario/signin",{lPeriodos, lSectores});
 
 // res.render("usuario/signin");

  //req.flash("success_msg", "Login Successfully");
  //res.redirect("/");
};








module.exports = usersCtrl;

