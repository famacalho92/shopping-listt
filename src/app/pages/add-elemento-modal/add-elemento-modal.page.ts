import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-add-elemento-modal',
  templateUrl: './add-elemento-modal.page.html',
  styleUrls: ['./add-elemento-modal.page.scss'],
})
export class AddElementoModalPage {
  @Input() listaId: number = 0;
  nombre: string = '';
  lugar: string = '';

  constructor(private modalCtrl: ModalController, private dataService: DataService) {}

  cancel() {
    this.modalCtrl.dismiss();
  }

  guardarElemento() {
    if (this.nombre && this.lugar) {
      this.dataService.addElementoALista(this.listaId, this.nombre, this.lugar);
      this.modalCtrl.dismiss();
    }
  }
}