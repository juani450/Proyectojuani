import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTACIONES DE LAS VISTAS DEL MODULO PRODUCTO
import { ProductoComponent } from './page/producto/producto.component';
import { ComidaComponent } from './page/comida/comida.component';
import { RopaComponent } from './page/ropa/ropa.component';
import { JuguetesComponent } from './page/juguetes/juguetes.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"comida",component:ComidaComponent
  },
  {
    path:"ropa",component:RopaComponent
  },
  {
    path:"juguetes",component:JuguetesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
