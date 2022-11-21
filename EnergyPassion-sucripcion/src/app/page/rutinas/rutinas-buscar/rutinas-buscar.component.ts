import { Component, OnInit } from '@angular/core';
import { rutinas } from 'src/app/module/rutinas';
import { RutinasService } from 'src/app/service/rutinas.service';

@Component({
  selector: 'app-rutinas-buscar',
  templateUrl: './rutinas-buscar.component.html',
  styleUrls: ['./rutinas-buscar.component.css']
})
export class RutinasBuscarComponent implements OnInit {
  textoBuscar:string="";
  constructor(private rutinasService: RutinasService) { }

  ngOnInit(): void {
  }

  buscar (e:any){

    let array: rutinas[]=[];
    this.rutinasService.listar().subscribe(data=>{
      data.forEach((element,index)=>{
        if (element.tren_superior.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.rutinasService.setLista(array);
    })
  }

}
