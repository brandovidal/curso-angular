import { ListItem } from './../../models/lista-item.model';
import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = '';

  constructor(
    public desesosService: DeseosService,
    private activatedRoute: ActivatedRoute
  ) {
    const listaId = this.activatedRoute.snapshot.paramMap.get('listaId');
    this.lista = this.desesosService.obtenerLista(listaId);
    // console.log('listaId ', listaId, this.lista);
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.desesosService.guardarStorage();
  }

  cambioCheck(item: ListItem) {
    const pendientes = this.lista.items.filter(i => !i.completado).length;
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.desesosService.guardarStorage();
  }

  borrar(i: number) {
    this.lista.items.splice(i, 1);
    this.desesosService.guardarStorage();
  }
}
