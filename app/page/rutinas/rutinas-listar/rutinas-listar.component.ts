
import { rutinas } from './../../../module/rutinas';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';//de no estar lo agregas
import { RutinasService } from 'src/app/service/rutinas.service';
import { MatDialog } from '@angular/material/dialog';
import { RutinasDialogoComponent } from './rutinas-dialogo/rutinas-dialogo.component';

@Component({
  selector: 'app-rutinas-listar',
  templateUrl: './rutinas-listar.component.html',
  styleUrls: ['./rutinas-listar.component.css']
})
export class RutinasListarComponent implements OnInit {
  lista:rutinas[]=[];
  dataSource:MatTableDataSource<rutinas>=new MatTableDataSource();

  displayedColumns: string[]=['id','Tren_superior','Tren_inferior','Tiempo','acciones', 'acciones2']
  private idMayor: number=0;
  constructor(private pService:RutinasService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.pService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(RutinasDialogoComponent);
  }

  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }
}
