import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyB-smBSopuLv7BMwx6W5wl-HxLy_Gw2Rcs';
  userToken: string;

  //  crear usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // loguear
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData)
    .pipe(map(resp => {
      this.guardarToken(resp);
      return resp;
    }));
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signUp?key=${this.apiKey}`, authData)
    .pipe(map(resp => {
      this.guardarToken(resp);
      return resp;
    }));
  }

  private guardarToken(resp: any) {
    const idToken = resp['idToken'];
    const expira = resp['expiresIn'];
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const hoy = new Date();
    hoy.setSeconds(parseInt(expira, null));
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    const idToken = localStorage.getItem('token');
    if (idToken) {
      this.userToken = idToken;
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticated(): boolean {
    if (this.userToken.length < 2) { return false; }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
