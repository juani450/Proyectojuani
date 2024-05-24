import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';


//son las encargadas de tner todas las rutas de la pagina
const routes: Routes = [
  //ruta comun que lleva a un solo componente
  {
    path:"",component:InicioComponent
  },
  
  // Carga perezosa que lleva a un modulo
  // loadChildren: indica una ruta hija
  // ()=>: ruta de donde viene el modulo
  // .then : promesa/ funcion asincronica
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
