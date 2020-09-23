import { AlertController, IonList } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from './../../models/lista.model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild('lista') lista: IonList;
  @Input() terminada = true;

  constructor(
    private router: Router,
    public deseosService: DeseosService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  listaSeleccionada(item: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${item.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);
    }
  }

  closeItem() {
    this.lista.closeSlidingItems();
  }

  async editarlista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      cssClass: 'dark',
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => this.lista.closeSlidingItems()
        },
        {
          text: 'Si, Editar',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    await alert.present();
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }
}
