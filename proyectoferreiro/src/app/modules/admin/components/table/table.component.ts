import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  //CREAR COLECCION DE PRODUCTOS DEL TIPO PRODUCTOS -> LO DEFINIMOS CON UN ARRAY
  coleccionProductos: Producto[] = [];


  //DEFINIMOS FORMULARIO PARA LOS PRODUCTOS 

  /*
  * ATRIBUTOS ALFDANUMERICOS (string) SE IICIALIZA CON COMILLAS SIMPLE
  * ATRIBUTOS NUMERICOS (number) SE INICIALIZA CON CERO ('0')
  */ 

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
  })




  constructor(public servicioCrud: CrudService){}


}
