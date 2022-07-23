const { Router } = require("express");
const 
 {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
  SigninValidRest,
  SigninValidRestRest,
  renderSigninFormRest,
  signinrest
}  = require("../controllers/usuario.controller");

const router = Router();

const { isAuthenticated } = require('../helpers/auth');

// Routes
router.get("/usuario/signup", renderSignUpForm);

router.post("/usuario/signup", singup);

router.get("/usuario/signin", renderSigninForm);

router.post("/usuario/signin", signin, SigninValidRest);

router.get("/usuario/signinrest",isAuthenticated, renderSigninFormRest);

router.post("/usuario/signinrest", SigninValidRestRest);

router.get("/usuario/logout", logout);

module.exports = router;

