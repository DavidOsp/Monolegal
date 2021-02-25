import { Component, OnInit } from '@angular/core';
import { ClientesService} from '../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})


export class ClientesComponent implements OnInit {
  

  constructor( public clienteService: ClientesService) { }


  ngOnInit(): void {
    this.getCLientes();
  }

  getCLientes(){
   this.clienteService.getClientes().subscribe(
      res => this.clienteService.clientes = res,
      err => console.log(err)       
    );
  }

}
