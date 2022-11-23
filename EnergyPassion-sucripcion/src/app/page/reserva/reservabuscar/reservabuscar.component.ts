import { Reserva } from './../../../module/reserva';
import { ReservaService } from './../../../service/reserva.service';
import { Component, OnInit} from '@angular/core';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-reservabuscar',
  templateUrl: './reservabuscar.component.html',
  styleUrls: ['./reservabuscar.component.css']
})
export class ReservabuscarComponent {
  textoBuscar:string="";
  constructor(private reservaS:ReservaService){}
  ngOnInit(): void{}
  buscar(e:any){
    let array: Reserva[]=[];
    this.reservaS.listar().subscribe  (data=>{
      data.forEach((element,index)=>{
        if (element.fecha.includes(e.target.value)){
          array.push(data[index]);
        }
      })
      this.reservaS.setLista(array);
    })
  }
}
