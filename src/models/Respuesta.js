const {Schema, model} = require('mongoose');

const AnskerSchema = new Schema(
    {
      idRespuesta: {
        type: Number,
        required: true,
        unique : true
      },
      Respuesta: {
        type: String,
        required: true,
      },
      idPregunta: {
        type: Number,
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
  