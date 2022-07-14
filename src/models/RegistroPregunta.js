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
        type: String,
        required: false,
        unique : false
      },
      P00000002_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000003_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000004_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000005_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000006_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000007_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000008_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000009_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000010_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000011_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000012_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000013_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000014_D: {
        type: String,
        required: false,
        unique : false
      },
       P00000015_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000016_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000017_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000018_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000019_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000020_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000021_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000022_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000023_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000024_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000025_D: {
        type: String,
        required: false,
        unique : false
      },
      P00000026_D: {
        type: String,
        required: false,
        unique : false
      },

      P00000001_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000002_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000003_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000004_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000005_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000006_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000007_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000008_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000009_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000010_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000011_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000012_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000013_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000014_P: {
        type: String,
        required: false,
        unique : false
      },
       P00000015_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000016_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000017_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000018_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000019_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000020_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000021_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000022_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000023_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000024_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000025_P: {
        type: String,
        required: false,
        unique : false
      },
      P00000026_P: {
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

  rAskSchema.plugin(mongooseLeanVirtuals);

  rAskSchema.virtual("uniqueId").get(function () {
  return this.filename.replace(path.extname(this.filename), "");
});



  module.exports = model("registroPreguntas", rAskSchema);
  