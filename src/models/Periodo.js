const {Schema, model} = require('mongoose');

const PeriodoSchema = new Schema(
    {
      Periodo: {
        type: String,
        required: true
//        unique: true, 
      //  trim: true
      },
      Descripcion: {
        type: String,
        required: true,
        trim: true
      },
      Estado: {
        type: Boolean,
        required: false,
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

  module.exports = model("Periodos", PeriodoSchema);
  