import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { AddElementoModalPage } from '../add-elemento-modal/add-elemento-modal.page';
import { Lista } from '../../services/models';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.page.html',
  styleUrls: ['./lista-detalle.page.scss'],
})
export class ListaDetallePage implements OnInit {
  lista: Lista | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.lista = this.dataService.getListaById(id);
  }

  async openAddElementoModal() {
    const modal = await this.modalCtrl.create({
      component: AddElementoModalPage,
      componentProps: { listaId: this.lista!.id }
    });
    modal.onDidDismiss().then(() => {
      if (this.lista) {
        this.lista = this.dataService.getListaById(this.lista.id);
      }
    });
    return await modal.present();
  }
}
