import { MatTableDataSource } from '@angular/material/table';//de no estar lo agregas
import { Cliente } from './../../../module/cliente'; ////de no estar lo agregas
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service'; //de no estar lo agregas
@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  lista:Cliente[]=[];
  dataSource:MatTableDataSource<Cliente>=new MatTableDataSource();
  //el de abajo es displayed columns
  displayedColumns: string[]=['id','nombre','apellido','fechanacimiento','edad','username','password','sexo','email','disponibilidad','Suscripcion_id','existEnfermedades','ListaEnfermedades','talla','peso','Condicion_fisica','Objetivo_fisico','Rutina_id']
  constructor(private pService:ClienteService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
