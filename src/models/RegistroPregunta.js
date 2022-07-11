const {Schema, model} = require('mongoose');
const path = require("path");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

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
      P00000004: {
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

      P00000001_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000002_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000003_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000004_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000005_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000006_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000007_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000008_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000009_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000010_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000011_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000012_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000013_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000014_T: {
        type: String,
        required: false,
        unique : false
      },
       P00000015_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000016_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000017_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000018_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000019_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000020_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000021_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000022_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000023_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000024_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000025_T: {
        type: String,
        required: false,
        unique : false
      },
      P00000026_T: {
        type: String,
        required: false,
        unique : false
      },	  
	  
	        P00000001_D: {
            data: Buffer,
            contentType: String
      },
      P00000002_D: {
        data: Buffer,
        contentType: String
      },
      P00000003_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000004_D: {
        data: Buffer,
        contentType: String
      },
      P00000005_D: {
        data: Buffer,
        contentType: String
      },
      P00000006_D: {
        data: Buffer,
        contentType: String
      },
      P00000007_D: {
        data: Buffer,
        contentType: String
      },
      P00000008_D: {
        data: Buffer,
        contentType: String
      },
      P00000009_D: {
        data: Buffer,
        contentType: String
      },
      P00000010_D: {
        data: Buffer,
        contentType: String
      },
      P00000011_D: {
        data: Buffer,
        contentType: String
      },
      P00000012_D: {
        data: Buffer,
        contentType: String
      },
      P00000013_D: {
        data: Buffer,
        contentType: String
      },
      P00000014_D: {
        data: Buffer,
        contentType: String
      },
       P00000015_D: {
        data: Buffer,
        contentType: String
      },
      P00000016_D: {
        data: Buffer,
        contentType: String
      },
      P00000017_D: {
        data: Buffer,
        contentType: String
      },
      P00000018_D: {
        data: Buffer,
        contentType: String
      },
      P00000019_D: {
        data: Buffer,
        contentType: String
      },
      P00000020_D: {
        data: Buffer,
        contentType: String
      },
      P00000021_D: {
        data: Buffer,
        contentType: String
      },
      P00000022_D: {
        data: Buffer,
        contentType: String
      },
      P00000023_D: {
        data: Buffer,
        contentType: String
      },
      P00000024_D: {
        data: Buffer,
        contentType: String
      },
      P00000025_D: {
        data: Buffer,
        contentType: String
      },
      P00000026_D: {
        data: Buffer,
        contentType: String
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

  rAskSchema.plugin(mongooseLeanVirtuals);

  rAskSchema.virtual("uniqueId").get(function () {
  return this.filename.replace(path.extname(this.filename), "");
});



  module.exports = model("registroPreguntas", rAskSchema);
  