const {Schema, model} = require('mongoose');

const vrptaSchema = new Schema(
    {
      idPregunta: {
        type: String,
        required: true,
      },
      pregunta: {
        type: String,
        required: true,
      },
      indArchivo: {
        type: String,
        required: true,
      },
      indTexto: {
        type: String,
        required: true,
      },
      codSector: {
        type: String,
        required: true,
      },
      respuesta1: {
        type: String,
        required: true,
      },
      respuesta2: {
        type: String,
        required: true,
      },
      respuesta3: {
        type: String,
        required: true,
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

  module.exports = model("vrpreguntasgrs", vrptaSchema);

  