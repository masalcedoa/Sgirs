const { Image } = require("../models/image");

const defaults =  {
  async popular() {
    const images = await Image.find()
      .limit(9)
      .sort({ likes: -1 })
      .lean({ virtuals: true });
    return images;
  },
};

module.exports = defaults;