import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Cliente} from '../Modelos/Cliente'


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  URL_API='http://localhost:4000/clientes'

  clientes:Cliente[] = [];


  constructor(private http : HttpClient) { }

   getClientes(){
    return this.http.get<Cliente[]>(this.URL_API)
   }


}
