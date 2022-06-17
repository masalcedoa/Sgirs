const {Schema, model} = require('mongoose');

const AskSchema = new Schema(
    {
      idPregunta: {
        type: Number,
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
  