import { MatTableDataSource } from '@angular/material/table';//de no estar lo agregas
import { Cliente } from './../../../module/cliente'; ////de no estar lo agregas
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service'; //de no estar lo agregas
import { MatDialog } from '@angular/material/dialog';
import { ClienteDialogoComponent } from './cliente-dialogo/cliente-dialogo.component';
@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  lista:Cliente[]=[];
  dataSource:MatTableDataSource<Cliente>=new MatTableDataSource();
  //el de abajo es displayed columns
  displayedColumns: string[]=['id','nombre','apellido','fechanacimiento','edad','username','sexo','email','disponibilidad','Suscripcion_id','ListaEnfermedades','talla','peso','Condicion_fisica','Objetivo_fisico','Rutina_id','acciones','acciones2']
  private idMayor: number = 0;
  constructor(private pService:ClienteService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pService.getConfirmaEliminacion().subscribe(data=>{
      data == true? this.eliminar(this.idMayor):false;
    })
  }
  confirmar(id:number){
    this.idMayor = id;
    this.dialog.open(ClienteDialogoComponent);
  }
  eliminar(id:number)
{
  this.pService.eliminarId(id).subscribe(()=>{
    this.pService.listar().subscribe(data=>{
      this.pService.setLista(data);
    })

  })
}
}
