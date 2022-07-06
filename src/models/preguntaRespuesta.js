const {Schema, model} = require('mongoose');

const rptaSchema = new Schema(
    {
      idRespuesta: {
        type: String,
        required: true,
        unique : false
      },
      respuesta: {
        type: String,
        required: true,
      },
      idPregunta: {
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

  module.exports = model("respuestasgrs", rptaSchema);

  