import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado = true;  //variable booleana para el boton de registro e inicio de sesion
  deslogueado = false;   //variable booleana para el boton de cerrar sesion

  constructor(public servicioAuth: AuthService, public servicioRutas: Router) { }


  //cambia los valores delogueado y deslogueado para ocultar los primeros y mostrar el ultimo
  iniciar() {
    this.logueado = false;
    this.deslogueado = true
  }

  cerrarSesion() {
    this.deslogueado = false;
    //metodo cerrar sesion va a eliminar el token actual del usuario
    //token: estado actual del usuario en el navegador para mantener la sesion abierta
    this.servicioAuth.cerrarSesion();

    this.servicioRutas.navigate(['/']);  //redirigimos a la raiz de la pagina
    this.logueado = true;

  }





  //Funcion para modo oscuro
  cambiarFondo() {
    let toggle: HTMLInputElement | null = document.getElementById("toggle") as HTMLInputElement
    let label_toggle: HTMLElement | null = document.getElementById("label_toggle") as HTMLElement

    if (toggle) {
      let checked: boolean = toggle.checked;
      document.body.classList.toggle("dark", checked)

      if(checked){
        label_toggle!.innerHTML = '<i class="fa-regular fa-sun"></i>'
      }else{

        label_toggle!.innerHTML = '<i class="fa-regular fa-moon"></i>'

      }
    }
  }






}
