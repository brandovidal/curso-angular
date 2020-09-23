import { AuthService } from './../../services/auth.service';
import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const Swal = require('sweetalert2');

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recodarme = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    Swal.fire({
      title: 'Registrar',
      text: `Espere por favor`,
      icon: 'info'
    });
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario)
    .subscribe(resp => {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');
      if (this.recodarme) {
        localStorage.setItem('email', this.usuario.email);
      }
    },
    err => {
      console.error(err.error.error.message);
      Swal.fire({
        title: 'Error al registrar!',
        text: `${err.error.error.message}`,
        icon: 'error'
      });
    });
  }
}
