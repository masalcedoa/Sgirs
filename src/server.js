const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
const flash = require("connect-flash");
const session = require('express-session') ;
const MongoStore = require("connect-mongo");
const passport = require("passport");
//const indexRoutes = require('./routes/index.routes');
const methodOverride = require( "method-override");
require('./config/passport');

//Settings
app.set('port',process.env.PORT || 4000) ;
app.set('views',path.join(__dirname,'views' ));

app.engine(
    '.hbs',
    exphbs.engine({
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      extname: ".hbs",
    })
  );

  app.set('view engine', '.hbs');

/*({
    layoutsDir: path.join(app.get('views') ,'layouts'),
    partialsDir: path.join(app.get('views') ,'partials'),*/

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
    //store: MongoStore.create({ mongoUrl: config.MONGODB_URI }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

//routes
//app.get('/',(req,res) => {
//    //res.send('Hello World');
//    res.render('index');
//});

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
//app.use(require('./routes/users.routes'));
app.use(require('./routes/usuario.routes'));
app.use(require('./routes/sector.routes'));
app.use(require('./routes/ask.routes'));
app.use(require('./routes/periodo.routes'));


//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.render("404");
});

module.exports = app;