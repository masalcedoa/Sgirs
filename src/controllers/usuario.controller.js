//React = require('react');
//ReactDOM = require('react-dom');

const usersCtrl = {};
const User  = require("../models/Usuario");
const passport= require("passport");
const session = require("express-session");

const sector  = require("../models/Sector");
const Periodo  = require("../models/Periodo");
const { redirect } = require("express/lib/response");




usersCtrl.renderSignUpForm = async (req, res) => {
  const lSectores = await sector.find().lean();




//console.log("Lista de Sectores",lSectores);

  res.render("usuario/signup",{lSectores});

};

usersCtrl.singup = async (req, res) => {
  let errors = [];

  
  const { responsable, direccion, contacto, correo, password, confirm_password, codSector } = req.body;

 

  console.log(req.body);
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
      codSector
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ correo: correo });

    
    if (emailUser) {
      console.log("compare correo");
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

      
      const newUser = new User({ responsable, direccion, contacto,codSector, correo, password });
      newUser.password = await newUser.encryptPassword(password);
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

usersCtrl.renderSigninForm = async (req, res) => {

  const lSectores = await sector.find().lean();
  const lPeriodos = await Periodo.find().lean();

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

  const { correo, codSector, Periodo } = req.body;

  const cResult = await User.findOne({ correo: correo, codSector : codSector });


  console.log("Valid Result User:",cResult );

  if (!cResult) {
    req.flash("success_msg", "Login failure");
    res.redirect("/usuario/signin");

  } 
  else {
    
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


module.exports = usersCtrl;