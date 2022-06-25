const {Schema, model} = require('mongoose');

const AnskerSchema = new Schema(
    {
      idRespuesta: {
        type: String,
        required: true,
        unique : true
      },
      respuesta: {
        type: String,
        required: true,
      },
      idPreguntaR: {
        type: String,
        required: true,
        unique : true
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

  module.exports = model("anskers", AnskerSchema);
  