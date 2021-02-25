import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../services/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  constructor(public facturaService:FacturasService) { }

  ngOnInit(): void {
    this.getFacturas();
  }


  getFacturas(){
      this.facturaService.getFacturas().subscribe(
        res => this.facturaService.facturas = res,
        err => console.log(err)
        
      );
  }

}
