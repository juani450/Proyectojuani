import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ARCHIVO DE RUTAS DEL MODULO
import { AdminRoutingModule } from './admin-routing.module';

//componenete de vista
import { AdminComponent } from './pages/admin/admin.component';

//COMPONNETE LOCAL
import { TableComponent } from './components/table/table.component';

//COMPONENTE DE MATERIAL
import { MatIconModule } from '@angular/material/icon';

//PAQUETERIA DE FORMULARIOS Y FORMULARIOS REACTIVOS DE ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent,
    TableComponent,
    MatIconModule
  ]
})
export class AdminModule { }
