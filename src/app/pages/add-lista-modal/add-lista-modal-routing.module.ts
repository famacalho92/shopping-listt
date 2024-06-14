import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddListaModalPage } from './add-lista-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddListaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddListaModalPageRoutingModule {}
