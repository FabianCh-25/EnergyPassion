import { CalificacionDialogoComponent } from './calificacion-dialogo/calificacion-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { CalificacionService } from './../../../service/calificacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { Calificacion } from './../../../module/calificacion';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-calificacionlistar',
  templateUrl: './calificacionlistar.component.html',
  styleUrls: ['./calificacionlistar.component.css']
})
export class CalificacionlistarComponent implements OnInit {
  lista:Calificacion[]=[];
  dataSource:MatTableDataSource<Calificacion>=new MatTableDataSource();
  DisplayedColumns:string[]=['id', 'calificado', 'cliente','acciones','acciones2']
  private idMayor: number = 0;
  constructor(private pService:CalificacionService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.pService.getLista().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.pService.getConfirmaEliminacion().subscribe(data=>{
      data == true? this.eliminar(this.idMayor):false;
    })
  }
  confirmar(id:number){
    this.idMayor = id;
    this.dialog.open(CalificacionDialogoComponent);
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
