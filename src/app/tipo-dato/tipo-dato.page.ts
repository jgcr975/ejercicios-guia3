import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-tipo-dato',
  templateUrl: './tipo-dato.page.html',
  styleUrls: ['./tipo-dato.page.scss'],
})
export class TipoDatoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calculateTwo(dato){

    typeof dato === 'string'
    typeof true === 'boolean'    


    if (dato>=0 || dato<=0 ){
     alert("El tipo de variable es númerico" )
      }
    else if (dato === "true" || dato === "false") {
      alert("El tipo de variable es boolean"    )
    }
    else if (dato === dato ){
      alert("El tipo de variable es string"    )
    }
   
  }
 
 
  }
  