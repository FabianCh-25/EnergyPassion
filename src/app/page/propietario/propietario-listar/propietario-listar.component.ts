import { PropietarioService } from './../../../service/propietario.service';
import { Propietario } from './../../../module/propietario';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
@Component({
  selector: 'app-propietario-listar',
  templateUrl: './propietario-listar.component.html',
  styleUrls: ['./propietario-listar.component.css']
})
export class PropietarioListarComponent implements OnInit {
  lista:Propietario[]=[];
  dataSource:MatTableDataSource<Propietario>= new MatTableDataSource();
  displayedColumns:string[]=['id','name' ,'email']
  constructor(private pSerice:PropietarioService) { }

  ngOnInit(): void {
    this.pSerice.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
