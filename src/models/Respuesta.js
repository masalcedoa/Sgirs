const {Schema, model} = require('mongoose');

const AnskerSchema = new Schema(
    {
      idRespuesta: {
        type: String,
        required: true,
        unique : true
      },
      Respuesta: {
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

  module.exports = model("Ansker", AnskerSchema);
  