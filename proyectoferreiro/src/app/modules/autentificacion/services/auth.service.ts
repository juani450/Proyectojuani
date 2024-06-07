import { Injectable } from '@angular/core';
//SERVICIO DE AUTENTIFICACION DE FIREBASE
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase para inicializarlo
  constructor(public auth: AngularFireAuth) { }



  //funcion para tomar UID


  //funcion para Registro
  registrar(email: string, password: string) {
    //retorna nueva informacion de EMAIL y CONTRASEÑA
    return this.auth.createUserWithEmailAndPassword(email, password)
  }



  //funcion para Inicio de Sesion
  iniciarSesion(email: string, password: string) {
    //validar el email y la contraseña
    return this.auth.signInWithEmailAndPassword(email, password);

  }



  //funcion para Cerrar Sesion
  cerrarSesion(){
    //devolver una promesa vacia
    return this.auth.signOut();
  }
}
