const { Schema, model } = require( "mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
    {
      responsable: { type: String, trim: true },
      direccion: { type: String, required: true, trim: true },
      periodo: { type: String, required: false, trim: true },
      contacto: { type: String, required: true, trim: true },
      codSector: { type: String, trim: true },
      correo: { type: String, required: true, unique: true, trim: true },
      password: { type: String, required: true },
      date: { type: Date, default: Date.now }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

  UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  

  module.exports =  model("UsuariosSgr", UserSchema);
