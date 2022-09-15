import { TrainerService } from './../../../service/trainer.service';
import { Trainer } from './../../../module/trainer';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-trainer-listar',
  templateUrl: './trainer-listar.component.html',
  styleUrls: ['./trainer-listar.component.css']
})
export class TrainerListarComponent implements OnInit {
lista:Trainer[]=[];
dataSource:MatTableDataSource<Trainer>=new MatTableDataSource();
displayedColumns:string[]=['id','name','age','nickname','sexo','UsuarioPremium','email','horario','idCalificacion']
  constructor(private pService:TrainerService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);

  })
}

}
