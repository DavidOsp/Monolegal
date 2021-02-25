import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FacturasComponent } from './facturas/facturas.component';

const RUTAS: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,

  }, {

    path: 'facturas',
    component: FacturasComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FacturasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
