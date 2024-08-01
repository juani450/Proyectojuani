import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore ,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ProductoComponent } from '../../producto/page/producto/producto.component';



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

   crearProducto(producto:Producto){
    return new Promise(async (resolve, reject) => {

      try{
        //CREAMOS NUMERO IDENTIFICATIVO PARTA EL PRODUCTO EN LA BASE DE DATOS
        const IdProducto = this.database.createId();
      
      //ASIGNAMOS ID CREADO AL ATRIBUTO IDPRODUCTO DE LA INTERFAZ "PRODUCTO"
        producto.IdProducto = IdProducto;

        const resultado = await this.productosCollection.doc(IdProducto).set(producto)

        resolve(resultado);

      }catch(error){
        reject(error);
      }
    })
   }






   //OBTENER PRODUCTO
   ///ADITAR PRODUCTO
   //ELIMINAR PRODUCTO



}
