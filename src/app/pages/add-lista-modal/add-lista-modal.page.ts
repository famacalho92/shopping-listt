import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-lista-modal',
  templateUrl: './add-lista-modal.page.html',
  styleUrls: ['./add-lista-modal.page.scss'],
})
export class AddListaModalPage {
  nombre: string = '';
  fecha: string = '';

  constructor(private modalCtrl: ModalController, private dataService: DataService) {}

  cancel() {
    this.modalCtrl.dismiss();
  }

  guardarLista() {
    if (this.nombre && this.fecha) {
      this.dataService.addLista(this.nombre, this.fecha);
      this.modalCtrl.dismiss();
    }
  }
}