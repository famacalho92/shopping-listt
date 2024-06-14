import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { AddListaModalPage } from '../add-lista-modal/add-lista-modal.page';
import { AddElementoModalPage } from '../add-elemento-modal/add-elemento-modal.page'; // Importar la página modal
import { Lista } from '../../services/models';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {
  listas: Lista[] = [];

  constructor(private dataService: DataService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.loadListas();
  }

  loadListas() {
    this.listas = this.dataService.getListas();
  }

  async openAddListaModal() {
    const modal = await this.modalCtrl.create({
      component: AddListaModalPage
    });
    modal.onDidDismiss().then(() => {
      this.loadListas();
    });
    return await modal.present();
  }

  async openAddElementoModal(listaId: number) {
    const modal = await this.modalCtrl.create({
      component: AddElementoModalPage,
      componentProps: { listaId }
    });
    modal.onDidDismiss().then(() => {
      this.loadListas();
    });
    return await modal.present();
  }
}
