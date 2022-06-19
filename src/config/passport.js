const passport = require( "passport");
const LocalStrategy = require('passport-local').Strategy

const User = require("../models/Usuario");

passport.use(
  new LocalStrategy(
    {
      usernameField: "correo",
    },
    async (email, password, done) => {
      // Match Email's User

      //console.log("email ???:",email)
      const user = await User.findOne({ correo: email });

     // console.log("result email ???:",user);




      if (!user) {
        return done(null, false, { message: "Not User found." });
      } else {
        // Match Password's User
        const match = await user.matchPassword(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password." });
        }
      }





    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
