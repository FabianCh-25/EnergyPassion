import { Tipo_Subscripcion } from './../../../module/tipo_subscripcion';
import { TipoSubscripcionService } from './../../../service/tipo-subscripcion.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-tipo-subscripcion-listar',
  templateUrl: './tipo-subscripcion-listar.component.html',
  styleUrls: ['./tipo-subscripcion-listar.component.css']
})
export class TipoSubscripcionListarComponent implements OnInit {
  lista:Tipo_Subscripcion[]=[];
  dataSource:MatTableDataSource<Tipo_Subscripcion>= new MatTableDataSource();
  displayedColumns:string[]=['id','name','age','nickname','sexo','UsuarioPremium','email','enfermedadesExistenciales','enfermedades','talla','peso','tiempoDisponible','condicion','idSuscribcion','metaPrincipal','idRutina']
  constructor(private pSerice:TipoSubscripcionService) { }

  ngOnInit(): void {
    this.pSerice.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}