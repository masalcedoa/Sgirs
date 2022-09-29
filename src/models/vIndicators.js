const { Schema, model } = require('mongoose');
const vIndSchema = new Schema(
    {
        idIndicador: {
            type: String,
            required: false,
            unique: false
        },
        descIndicador: {
            type: String,
            required: false,
            unique: false
        },
        idSector: {
            type: String,
            required: true,
            trim: true
        },
        VAR0000001: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000002: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000003: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000003: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000004: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000005: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000006: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000007: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000008: {
            type: String,
            required: false,
            unique: false
        },
        P00000012: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000009: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000010: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000011: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000012: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000013: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000014: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000015: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000016: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000017: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000018: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000019: {
            type: String,
            required: false,
            unique: false
        },
        VAR0000020: {
            type: String,
            required: false,
            unique: false
        },
        indOpcion: {
            type: String,
            required: false,
            unique: false
        },
        Opcion1: {
            type: String,
            required: false,
            unique: false
        },
        Opcion2: {
            type: String,
            required: false,
            unique: false
        },
        Opcion3: {
            type: String,
            required: false,
            unique: false
        },
        Opcion4: {
            type: String,
            required: false,
            unique: false
        },
        Opcion5: {
            type: String,
            required: false,
            unique: false
        },
        Opcion6: {
            type: String,
            required: false,
            unique: false
        },
        Opcion7: {
            type: String,
            required: false,
            unique: false
        },
        Opcion8: {
            type: String,
            required: false,
            unique: false
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

module.exports = model("vindicators", vIndSchema);
