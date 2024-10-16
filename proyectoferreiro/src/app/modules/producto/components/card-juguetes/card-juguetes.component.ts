import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';


@Component({
  selector: 'app-card-juguetes',
  templateUrl: './card-juguetes.component.html',
  styleUrls: ['./card-juguetes.component.css']
})
export class CardJuguetesComponent {

  //coleccion de todos los productos
  coleccionProductos: Producto[] = [];

  //coleccion de solo productos de categoria juguetes
  coleccionJuguetes: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;


  //boolean para manejar la visibilidad de "Ultima compra"
  compraVisible: boolean = false;

  //Directivas para comunicarse con el componente padre
  @Input() productoReciente: string = '';

  //Output sera definido como un nuevo evento
  @Output() productoAgregado = new EventEmitter<Producto>;




  constructor(public servicioCrud: CrudService) { }
  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;


      //mostrar la coleccion actual de juguetes
      this.mostrarProductoJuguetes();
    })
    
  }


  mostrarProductoJuguetes() {
    this.coleccionProductos.forEach(producto => {
      //si la categoria de producto es igual a "juguetes", te enviara a la coleccion de juguetes especificos
      if (producto.categoria === "juguetes") {
        //.push sube o agrega un item a una coleccion
        this.coleccionJuguetes.push(producto);
      }
    })
  }


  //muestra informacion completa de un producto elegido por el usuario 
  mostrarVer(info: Producto) {

    this.modalVisible = true;

    this.productoSeleccionado = info;
  }


  agregarProducto(info: Producto) {
    this.productoAgregado.emit(info);

    this.compraVisible = true;
  }

}
