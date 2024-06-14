import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDetallePageRoutingModule } from './lista-detalle-routing.module';

import { ListaDetallePage } from './lista-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDetallePageRoutingModule
  ],
  declarations: [ListaDetallePage]
})
export class ListaDetallePageModule {}
