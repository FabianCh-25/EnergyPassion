import { tiposuscripcion } from './../../../module/tiposuscripcion';
import { TiposuscripcionService } from './../../../service/tiposuscripcion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiposuscripcion-buscar',
  templateUrl: './tiposuscripcion-buscar.component.html',
  styleUrls: ['./tiposuscripcion-buscar.component.css']
})
export class TiposuscripcionBuscarComponent implements OnInit {
  textobuscar: number = 0
  constructor(private TiposuscripcionService: TiposuscripcionService) { }

  ngOnInit(): void {
  }
  buscar(e: any){
    let array: tiposuscripcion[] = [];
    this.TiposuscripcionService.listar().subscribe(data => {
      data.forEach((Element, index) => {
        if(Element.idtiposuscripcion.toString().includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.TiposuscripcionService.setLista(array);
    })
  }
}
