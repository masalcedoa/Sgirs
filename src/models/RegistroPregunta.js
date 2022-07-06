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
      P00000010: {
        type: String,
        required: false,
        unique : false
      },
      P00000011: {
        type: String,
        required: false,
        unique : false
      },
      P00000012: {
        type: String,
        required: false,
        unique : false
      },
      P00000013: {
        type: String,
        required: false,
        unique : false
      },
      P00000014: {
        type: String,
        required: false,
        unique : false
      },
       P00000015: {
        type: String,
        required: false,
        unique : false
      },
      P00000016: {
        type: String,
        required: false,
        unique : false
      },
      P00000017: {
        type: String,
        required: false,
        unique : false
      },
      P00000018: {
        type: String,
        required: false,
        unique : false
      },
      P00000019: {
        type: String,
        required: false,
        unique : false
      },
      P00000020: {
        type: String,
        required: false,
        unique : false
      },
      P00000021: {
        type: String,
        required: false,
        unique : false
      },
      P00000022: {
        type: String,
        required: false,
        unique : false
      },
      P00000023: {
        type: String,
        required: false,
        unique : false
      },
      P00000024: {
        type: String,
        required: false,
        unique : false
      },
      P00000025: {
        type: String,
        required: false,
        unique : false
      },
      P00000026: {
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
  