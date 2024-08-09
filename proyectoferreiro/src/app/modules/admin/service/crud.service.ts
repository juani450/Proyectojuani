import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ProductoComponent } from '../../producto/page/producto/producto.component';
import { map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //DEFINIMOS COLECCION PARA LOS PRODUSCTOS Y SERA SUBBIDA COM "PRODUCTO" A FIRESTORE
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto')
  }




  //CREAR PRODUCTO

  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {

      try {
        //CREAMOS NUMERO IDENTIFICATIVO PARTA EL PRODUCTO EN LA BASE DE DATOS
        const IdProducto = this.database.createId();

        //ASIGNAMOS ID CREADO AL ATRIBUTO IDPRODUCTO DE LA INTERFAZ "PRODUCTO"
        producto.IdProducto = IdProducto;

        const resultado = await this.productosCollection.doc(IdProducto).set(producto)

        resolve(resultado);

      } catch (error) {
        reject(error);
      }
    })
  }






  //OBTENER PRODUCTO

  obtenerProducto() {

    //snapshotChange -> toma na captura del estado de los datos
    //pipe -> funciona como una tuberia que retoma el nuevo arreglo de datos
    //map -> "mapea" o recorre esa nueva informacion
    //a -> resguarda la nueva informacion y la envia

    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }



  //EDITAR PRODUCTO

  modificarProducto(idProducto: string, nuevoData: Producto){
    //accedemos a la coleccion, buscamos por ID y actualizamos informacion
    return this.database.collection("producto").doc(idProducto).update(nuevoData);
  }


  //ELIMINAR PRODUCTO
  eliminarProducto(idProducto: string){
    return new Promise((resolve, reject) => {
      try {
        //accede a la coleccion, busco su ID y lo elimino
        const respuesta = this.productosCollection.doc(idProducto).delete();
        resolve(respuesta)
      }
      catch(error){
        reject(error);
      }
    })
  }





}
