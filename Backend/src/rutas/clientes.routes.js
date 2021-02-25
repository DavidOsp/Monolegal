const {Router} = require('express')
const router = Router()

const clientesCtrl = require('../controlador/clientes.controller.js')

router.get('/clientes', clientesCtrl.getClientes);
router.post('/clientes', clientesCtrl.crearCliente);
router.get('/clientes/:id', clientesCtrl.getCliente);
router.put('/clientes/:id', clientesCtrl.editarCliente);
router.delete('/clientes/:id', clientesCtrl.borrarCliente);




module.exports = router