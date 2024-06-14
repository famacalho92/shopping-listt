import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddElementoModalPageRoutingModule } from './add-elemento-modal-routing.module';
import { AddElementoModalPage } from './add-elemento-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddElementoModalPageRoutingModule
  ],
  declarations: [AddElementoModalPage]
})
export class AddElementoModalPageModule {}
