import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//vista,pagina que va a ver el usuario
import { InicioComponent } from './pages/inicio/inicio.component';
//componentes locales
import { CardComponent } from './components/card/card.component';
//componentes que importamos desde material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';







@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    CardComponent
  ]
})
export class InicioModule { }
