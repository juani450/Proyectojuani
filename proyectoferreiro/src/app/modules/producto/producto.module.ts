import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

//VISTAS
import { ProductoComponent } from './page/producto/producto.component';
import { ComidaComponent } from './page/comida/comida.component';
import { RopaComponent } from './page/ropa/ropa.component';
import { JuguetesComponent } from './page/juguetes/juguetes.component';
import { CardJuguetesComponent } from './components/card-juguetes/card-juguetes.component';




@NgModule({
  declarations: [
    ProductoComponent,
    ComidaComponent,
    RopaComponent,
    JuguetesComponent,
    CardJuguetesComponent,

  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    RopaComponent,
    ComidaComponent,
    JuguetesComponent,
    CardJuguetesComponent,
  ]
})
export class ProductoModule { }
