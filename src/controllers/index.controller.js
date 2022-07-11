const indexCtrl = {};
const imageCtrl = require("./image.controller");
const homeCtrl = require("./home.controller");

console.log('entre a controller');

indexCtrl.renderIndex = (req, res) => {
    res.render("index");
  };
  
indexCtrl.renderAbout = (req, res) => {
    res.render("about");
  };
  
  module.exports = indexCtrl,imageCtrl,homeCtrl ;
  
  //module.exports = imageCtrl;
  //module.exports = homeCtrl;



/*export const renderIndex = (req, res) => {
    res.render("index");
  };
  
  export const renderAbout = (req, res) => {
    res.render("about");
  };*/
  

