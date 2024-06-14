import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListaComprasPageRoutingModule } from './lista-compras-routing.module';
import { ListaComprasPage } from './lista-compras.page';
import { AddListaModalPage } from '../add-lista-modal/add-lista-modal.page';
import { AddElementoModalPageModule } from '../add-elemento-modal/add-elemento-modal.module'; // Importar el módulo del modal


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComprasPageRoutingModule,
    AddElementoModalPageModule
  ],
  declarations: [ListaComprasPage, AddListaModalPage]
})
export class ListaComprasPageModule {}
