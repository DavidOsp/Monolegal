const { Schema, model } = require('mongoose')

const facturaSchema = new Schema({
    codigo: { type: String, required: true },
    totalFactura: { type: Number, required: true },
    impuesto: { type: Number, required: true },
    estado: { type: String, required: true },
    pagada: { trype: Boolean}



}, {
    timestamps: false,
    versionKey: false
})


module.exports = model('Factura', facturaSchema);
