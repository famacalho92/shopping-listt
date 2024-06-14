import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDetallePage } from './lista-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDetallePageRoutingModule {}
