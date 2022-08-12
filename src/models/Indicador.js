const {Schema, model} = require('mongoose');

const indicatorSchema = new Schema(
    {
      idIndicador: {
        type: String,
        required: true,
        unique : false
      },
      descIndicador: {
        type: String,
        required: true,
      },
      idSector: {
        type: String,
        required: true,
        trim: true
      },
      user: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  module.exports = model("indicator", indicatorSchema);
  