
const facturaCtrl ={}

const Factura = require('../modelo/Factura')

facturaCtrl.getFacturas = async (req,res)=> {
   const facturas =  await Factura.find() 
   res.json(facturas)
}
facturaCtrl.crearFactura = (req,res)=> {
    res.send('crear factura')

}
facturaCtrl.getFactura = (req,res)=> {
    res.send('get factura')

}
facturaCtrl.editarFactura = (req,res)=> {
    res.send('edit factura')

}
facturaCtrl.borrarFactura = (req,res)=> {
    res.send('delete factura')

}



module.exports= facturaCtrl;