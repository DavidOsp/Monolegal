const {Router} = require('express')
const router = Router()

const facturasCtrl = require('../controlador/facturas.controller.js')

router.get('/facturas', facturasCtrl.getFacturas);
router.post('/facturas', facturasCtrl.crearFactura);
router.get('/facturas/:id', facturasCtrl.getFactura);
router.put('/facturas/:id', facturasCtrl.editarFactura);
router.delete('/facturas/:id', facturasCtrl.borrarFactura);




module.exports = router