const indexCtrl = {};

console.log('entre a controller');

indexCtrl.renderIndex = (req, res) => {
    res.render("index");
  };
  
indexCtrl.renderAbout = (req, res) => {
    res.render("about");
  };
  
  module.exports = indexCtrl;



/*export const renderIndex = (req, res) => {
    res.render("index");
  };
  
  export const renderAbout = (req, res) => {
    res.render("about");
  };*/
  

