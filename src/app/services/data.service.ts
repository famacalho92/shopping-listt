import { Injectable } from '@angular/core';
import { Lista, Elemento } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private listas: Lista[] = [];

  constructor() {}

  getListas(): Lista[] {
    return this.listas;
  }

  addLista(nombre: string, fecha: string): Lista {
    const nuevaLista: Lista = { id: this.listas.length + 1, nombre, fecha, elementos: [] };
    this.listas.push(nuevaLista);
    return nuevaLista;
  }

  getListaById(id: number): Lista | undefined {
    return this.listas.find(lista => lista.id === id);
  }

  addElementoALista(listaId: number, nombre: string, lugar: string): void {
    const lista = this.getListaById(listaId);
    if (lista) {
      const nuevoElemento: Elemento = { nombre, lugar };
      lista.elementos.push(nuevoElemento);
    }
  }
}