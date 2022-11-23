import { SubscripcionService } from './../../../service/subscripcion.service';
import { subscripcion } from './../../../module/subscripcion';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-subscripcion-buscar',
  templateUrl: './subscripcion-buscar.component.html',
  styleUrls: ['./subscripcion-buscar.component.css']
})
export class SubscripcionBuscarComponent implements OnInit {
  textobuscar: string = ""
  constructor(private SubscripcionService: SubscripcionService) { }

  ngOnInit(): void {
  }
  buscar(e: any){
    let array: subscripcion[] = [];
    this.SubscripcionService.listar().subscribe(data => {
      data.forEach((Element, index) => {
        if(Element.descripcion_plan.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.SubscripcionService.setLista(array);
    })
}
}
