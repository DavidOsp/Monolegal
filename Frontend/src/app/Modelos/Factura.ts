import {Cliente} from './Cliente'
export interface Factura {
    _id:String
    cliente:Cliente
    codigo:String
    totalFactura:number
    subTotal:number
    impuesto:number
    retencion:number;
    fechaCreacion:string;
    estado:String
    pagada:boolean
    fechaPagada:String
}