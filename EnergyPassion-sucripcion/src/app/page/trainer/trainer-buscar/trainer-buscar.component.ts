import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/module/trainer';
import { TrainerService } from 'src/app/service/trainer.service';

@Component({
  selector: 'app-trainer-buscar',
  templateUrl: './trainer-buscar.component.html',
  styleUrls: ['./trainer-buscar.component.css']
})
export class TrainerBuscarComponent implements OnInit {
  textobuscar: string = ""
  constructor(private TrainerService: TrainerService) { }

  ngOnInit(): void {
  }

  buscar(e: any){
    let array: Trainer[] = [];
    this.TrainerService.listar().subscribe(data => {
      data.forEach((Element, index) => {
        if(Element.nombre.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.TrainerService.setLista(array);
    })
  }

}
