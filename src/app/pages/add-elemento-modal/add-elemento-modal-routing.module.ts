import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddElementoModalPage } from './add-elemento-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddElementoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddElementoModalPageRoutingModule {}
