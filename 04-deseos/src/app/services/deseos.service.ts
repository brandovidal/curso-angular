import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    // const lista1 = new Lista('Recolectar las piedras del infinito');
    // const lista2 = new Lista('Salvar al universo');
    // this.listas.push(lista1, lista2);

    this.cargarStorage();
    console.log('Init DeseosService', this.listas);
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(data => data.id !== lista.id);
    this.guardarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find(data => data.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    const data = localStorage.getItem('data');
    if (!data) {
      this.listas = [];
      return;
    }
    this.listas = JSON.parse(data);
  }
}
