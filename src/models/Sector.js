const {Schema, model} = require('mongoose');

const SectorSchema = new Schema(
    {
      CodSector: {
        type: String,
        required: true,
//        unique: true, 
        trim: true
      },
      Descripcion: {
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

  module.exports = model("Sectores", SectorSchema);
  