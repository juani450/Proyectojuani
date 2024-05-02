import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  //propiedad publica (tipo array)
  public info: Animal[];

  constructor(){
    this.info = [
      {
        id:"",
        nombre: "perro feliz",
        edad: 4,
        imagen:"https://media.infocielo.com/p/820b732a1595084212a380c3e4b1029f/adjuntos/299/imagenes/000/536/0000536400/20180907084807_perro-drogado-intoxicado-fotos-animales-danes-dogo-razas-boo-muertojpg.jpg",
        alt: "perro feliz",
      },
      {
        id:"",
        nombre: "gato dormido",
        edad: 3,
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoNwgP2b37H6Bt_boZQLMziLNPLmZnt2wBs235ElVCA&s",
        alt: "gato dormido",
      },{
        id:"",
        nombre: "cabra loca",
        edad: 8,
        imagen:"https://i.ytimg.com/vi/QM0wD4cEeqs/hqdefault.jpg",
        alt: "cabra loca",
      },
      
    ]
  }
}
