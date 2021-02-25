const { Schema, model } = require('mongoose')

const clienteSchema = new Schema({
    nombre: { type: String, required: true },
    nit: { type: String, required: true },
    ciudad: { type: String, required: true },


}, {
    timestamps: false,
    versionKey: false
})


module.exports = model('Cliente', clienteSchema)