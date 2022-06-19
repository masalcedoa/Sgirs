const {Schema, model} = require('mongoose');

const rAskSchema = new Schema(
    {
      P00000001: {
        type: String,
        required: false,
        unique : false
      },
      P00000002: {
        type: String,
        required: false,
        unique : false
      },
      P00000003: {
        type: String,
        required: false,
        unique : false
      },
      P00000003: {
        type: String,
        required: false,
        unique : false
      },
      P00000005: {
        type: String,
        required: false,
        unique : false
      },
      P00000006: {
        type: String,
        required: false,
        unique : false
      },
      P00000007: {
        type: String,
        required: false,
        unique : false
      },
      P00000008: {
        type: String,
        required: false,
        unique : false
      },
      P00000009: {
        type: String,
        required: false,
        unique : false
      },
      CodSector: {
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

  module.exports = model("registroPreguntas", rAskSchema);
  