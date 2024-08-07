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
  * ATRIBUTOS ALFDANUMERICOS (string) SE INICIALIZA CON COMILLAS SIMPLE
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


  ngOnInit():void{

    //subscribe = notifica constantemente los cambios actuales del sistema
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      //guarda la informacion recibida como un nuevo "producto" a la coleccion
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){
    //Validamos los valores del producto agregado
    if (this.producto.valid) {

      let nuevoProducto: Producto = {
        //idProducto no se toma porque es generadapor la BD y no por el usuario
        IdProducto : '',
        //El resto es tomado con informacion ingresada por el usuario
        nombre : this.producto.value.nombre!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
      }

      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto =>{
        alert("ha agregado un nuevo producto con exito :)")
      })
      .catch(error =>{
        alert("Hubo un problema al agregar un nuevo producto :(")
      })
      
    }
  }

}
