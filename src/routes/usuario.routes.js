const { Router } = require("express");
const 
 {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
  SigninValidRest
}  = require("../controllers/usuario.controller");

const router = Router();

// Routes
router.get("/usuario/signup", renderSignUpForm);

router.post("/usuario/signup", singup);

router.get("/usuario/signin", renderSigninForm);

router.post("/usuario/signin", signin, SigninValidRest);

router.get("/usuario/logout", logout);

module.exports = router;

