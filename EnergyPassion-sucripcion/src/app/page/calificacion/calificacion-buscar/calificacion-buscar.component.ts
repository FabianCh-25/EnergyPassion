import { Calificacion } from './../../../module/calificacion';
import { Component, OnInit } from '@angular/core';

import { CalificacionService } from 'src/app/service/calificacion.service';
@Component({
  selector: 'app-calificacion-buscar',
  templateUrl: './calificacion-buscar.component.html',
  styleUrls: ['./calificacion-buscar.component.css']
})
export class CalificacionBuscarComponent implements OnInit{
  textoBuscar:string="";
  constructor(private calificacionS:CalificacionService){

  }
  ngOnInit(): void {
    
  }
  buscar(e:any){
    let array:Calificacion[]=[];
     this.calificacionS.listar().subscribe(data=>{
      data.forEach((element,index)=>{
        if (element.calificado.includes(e.target.value)){
          array.push(data[index]);
        }
      })
      this.calificacionS.setLista(array);
    })
}

}
