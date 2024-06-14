import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddListaModalPageRoutingModule } from './add-lista-modal-routing.module';

import { AddListaModalPage } from './add-lista-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddListaModalPageRoutingModule
  ],
  declarations: [AddListaModalPage]
})
export class AddListaModalPageModule {}
