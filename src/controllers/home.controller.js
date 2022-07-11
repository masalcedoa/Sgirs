const sidebar = require("../helpers/sidebar");
const { Image } = require("../models/image");
const homeCtrl = {};

homeCtrl.Index = async (req, res, next) => {
  try {
    const images = await Image.find()
      .sort({ timestamp: -1 })
      .lean({ virtuals: true });

    let viewModel = { images: [] };
    viewModel.images = images;
    viewModel = await sidebar(viewModel);
    res.render("index", viewModel);
  } catch (error) {
    next(error);
  }
};

module.export = homeCtrl;
