const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    //console.log("autentica");
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error_msg", "Not Authorized.");
    res.redirect("/usuario/signin");
  };
  
  module.exports = helpers;