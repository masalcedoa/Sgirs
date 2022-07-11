const { Comment } = require("../models/comment");
const { Image } = require("../models/image");

const defaults =  {
  async newest() {
    const comments = await Comment.find().limit(5).sort({ timestamp: -1 });

    for (const comment of comments) {
      const image = await Image.findOne({ _id: comment.image_id });
      comment.image = image;
    }

    return comments;
  },
};

module.export = defaults;
module.export = Comment;
module.export = Image;
