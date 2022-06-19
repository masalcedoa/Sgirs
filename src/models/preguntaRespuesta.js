const {Schema, model} = require('mongoose');

const rsSchema = new Schema(
    {
      idPregunta: {
        type: Number,
        required: true,
        unique : true
      },
      idRespuesta: {
        type: Number,
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

  module.exports = model("preguntaRespuestas", rsSchema);
  