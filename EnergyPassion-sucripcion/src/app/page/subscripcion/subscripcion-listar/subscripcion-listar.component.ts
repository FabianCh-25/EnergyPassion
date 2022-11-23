import { SubscripcionDialogoComponent } from './subscripcion-dialogo/subscripcion-dialogo.component';
import { SubscripcionService } from './../../../service/subscripcion.service';
import { subscripcion } from './../../../module/subscripcion';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-subscripcion-listar',
  templateUrl: './subscripcion-listar.component.html',
  styleUrls: ['./subscripcion-listar.component.css']
})
export class SubscripcionListarComponent implements OnInit {
  lista: subscripcion[] = [];
  dataSource: MatTableDataSource<subscripcion> = new MatTableDataSource();
  displayedColumns: string[] = ['idsuscripcion','precio_plan','descripcion_plan','tiposuscripcion','acciones', 'accion2'];
  private idMayor: number = 0;
  constructor(private ps: SubscripcionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(SubscripcionDialogoComponent);
  }

  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      })
    });
  }

}



