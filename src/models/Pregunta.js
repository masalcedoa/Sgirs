const {Schema, model} = require('mongoose');

const AskSchema = new Schema(
    {
      idPregunta: {
        type: String,
        required: true,
        unique : true
      },
      pregunta: {
        type: String,
        required: true,
      },
      indArchivo: {
        type: Boolean,
        required: true,
      },
      indTexto: {
        type: Boolean,
        required: false,
      },
      codSector: {
        type: String,
        required: true,
//        unique: true, 
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

  module.exports = model("asks", AskSchema);
  