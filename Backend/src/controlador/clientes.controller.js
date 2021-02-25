
const clienteCtrl ={}
 


const Cliente = require('../modelo/Cliente')

clienteCtrl.getClientes = async (req,res)=> {
   const clientes =  await Cliente.find() 
   res.json(clientes)
}
clienteCtrl.crearCliente = async (req,res)=> {
    const nuevoCliente = new Cliente(req.body);
     await nuevoCliente.save();

    res.send({mensaje: 'cliente creado '}) 

}
clienteCtrl.getCliente = async (req,res)=> {
    const getCliente =  await Cliente.findById(req.params.id);
    res.send(getCliente);

}
clienteCtrl.editarCliente = async (req,res)=> {
     const editarCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body);
    res.json({ Estaus :'Cliente Actualizado'});

}
clienteCtrl.borrarCliente = async (req,res)=> {
    const borrarCliente = await Cliente.findByIdAndDelete(req.params.id);
    res.send('Cliente eliminado de la base de datos.');

}



module.exports= clienteCtrl;