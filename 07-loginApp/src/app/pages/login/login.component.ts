import { AuthService } from './../../services/auth.service';
import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const Swal = require('sweetalert2');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recodarme = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const email = localStorage.getItem('email');
    if (email) {
      this.usuario.email = email;
      this.recodarme = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) { return; }

    Swal.fire({
      title: 'Login',
      text: `Espere por favor`,
      icon: 'info'
    });
    Swal.showLoading();

    this.auth.login(this.usuario)
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
        title: 'Error al autenticar!',
        text: `${err.error.error.message}`,
        icon: 'error'
      });
    });
  }
}
