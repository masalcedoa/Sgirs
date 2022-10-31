const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
var bodyParser = require('body-parser');
const flash = require("connect-flash");
const session = require('express-session') ;
const MongoStore = require("connect-mongo");
const passport = require("passport");
//const indexRoutes = require('./routes/index.routes');
const methodOverride = require( "method-override");
require('./config/passport');
const helpers = require("./helpers/libs");
const multer = require('multer');
const errorHandler = require('errorhandler');

//var mongoose = require('mongoose')
 
//var fs = require('fs');



//Settings
app.set('port',process.env.PORT || 4000) ;
app.set('views',path.join(__dirname,'views' ));

app.engine(
    '.hbs',
    exphbs.engine({
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      helpers,
      extname: ".hbs",
    })
  );



  app.set('view engine', '.hbs');

  /*app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())*/

  // Set EJS as templating engine
//app.set("view engine", "ejs");



/*({
    layoutsDir: path.join(app.get('views') ,'layouts'),
    partialsDir: path.join(app.get('views') ,'partials'),*/

  // Uploads Settings
//app.use(multer({ dest: "./uploads" }).single("image"));
//const upload = multer({ dest: 'uploads/' });
//const cpUpload = upload.fields([{ name: 'P00000001_D', maxCount: 1 }, { name: 'P00000002_D', maxCount: 1 }]);

//app.use(multer({ dest: "./uploads" }).fields([{ name: 'P00000001_D', maxCount: 1 }, { name: 'P00000002_D', maxCount: 1 }]));

app.use(multer({ dest: "./uploads" }).fields([{ name: 'P00000001_D', maxCount: 1 }, { name: 'P00000002_D', maxCount: 1 },
{ name: 'P00000003_D', maxCount: 1 },{ name: 'P00000004_D', maxCount: 1 },{ name: 'P00000005_D', maxCount: 1 },
{ name: 'P00000006_D', maxCount: 1 },{ name: 'P00000007_D', maxCount: 1 },{ name: 'P00000008_D', maxCount: 1 },
{ name: 'P00000009_D', maxCount: 1 },{ name: 'P00000010_D', maxCount: 1 },{ name: 'P00000011_D', maxCount: 1 },
{ name: 'P00000012_D', maxCount: 1 },{ name: 'P00000013_D', maxCount: 1 },{ name: 'P00000014_D', maxCount: 1 },
{ name: 'P00000015_D', maxCount: 1 },{ name: 'P00000016_D', maxCount: 1 },{ name: 'P00000017_D', maxCount: 1 },
{ name: 'P00000018_D', maxCount: 1 },{ name: 'P00000018_D', maxCount: 1 },{ name: 'P00000019_D', maxCount: 1 },
{ name: 'P00000020_D', maxCount: 1 },{ name: 'P00000021_D', maxCount: 1 },{ name: 'P00000022_D', maxCount: 1 },
{ name: 'P00000023_D', maxCount: 1 },{ name: 'P00000024_D', maxCount: 1 },{ name: 'P00000025_D', maxCount: 1 },
{ name: 'P00000026_D', maxCount: 1 }, { name: 'documento_sgirs', maxCount: 1 }]));

//app.use(multer({ dest: "./uploads" }).single("c"));
//app.use(multer({ dest: "./uploads2" }).single("P00000002_D"));
//app.use(multer({ dest: "./uploads" }).single("P00000002_D"));
/*app.use(multer({ dest: './uploads' }).single('P00000002_D'));
app.use(multer({ dest: './uploads' }).single('P00000003_D'));
app.use(multer({ dest: './uploads' }).single('P00000004_D'));
app.use(multer({ dest: './uploads' }).single('P00000005_D'));
app.use(multer({ dest: './uploads' }).single('P00000006_D'));
app.use(multer({ dest: './uploads' }).single('P00000007_D'));
app.use(multer({ dest: './uploads' }).single('P00000008_D'));
app.use(multer({ dest: './uploads' }).single('P00000009_D'));
app.use(multer({ dest: './uploads' }).single('P00000010_D'));
app.use(multer({ dest: './uploads' }).single('P00000011_D'));
app.use(multer({ dest: './uploads' }).single('P00000012_D'));
app.use(multer({ dest: './uploads' }).single('P00000013_D'));
app.use(multer({ dest: './uploads' }).single('P00000014_D'));
app.use(multer({ dest: './uploads' }).single('P00000015_D'));
app.use(multer({ dest: './uploads' }).single('P00000016_D'));
app.use(multer({ dest: './uploads' }).single('P00000017_D'));
app.use(multer({ dest: './uploads' }).single('P00000018_D'));
app.use(multer({ dest: './uploads' }).single('P00000019_D'));
app.use(multer({ dest: './uploads' }).single('P00000020_D'));
app.use(multer({ dest: './uploads' }).single('P00000021_D'));
app.use(multer({ dest: './uploads' }).single('P00000022_D'));
app.use(multer({ dest: './uploads' }).single('P00000023_D'));
app.use(multer({ dest: './uploads' }).single('P00000024_D'));
app.use(multer({ dest: './uploads' }).single('P00000025_D'));
app.use(multer({ dest: './uploads' }).single('P00000026_D'));
*/




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
  res.locals.user = req.user || null
  res.locals.userInt = req.user || {};
  res.locals.operador = res.locals.userInt.indOperador;

  //console.log("en el server", res.locals.user );
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
app.use(require('./routes/rask.routes'));
app.use(require('./routes/rind.routes'));


//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.render("404");
});

// The Public directory for static files
app.use("/public", express.static(path.join(__dirname, "./public")));


// The Uploads directory
app.use("/uploads", express.static("./uploads"));

// Error Handling
if ("development" === app.get("env")) {
  app.use(errorHandler());
}

app.use(bodyParser.urlencoded(
  { extended:true }
))

// Step 5 - set up multer for storing uploaded files

/*var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });*/

 
 


module.exports = app;
