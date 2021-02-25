import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Factura} from '../Modelos/Factura'

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  URL_API='http://localhost:4000/facturas'

  facturas:Factura[] = [];

  constructor(private htt:HttpClient) { }


getFacturas(){
  return this.htt.get<Factura[]>(this.URL_API);
}

}
