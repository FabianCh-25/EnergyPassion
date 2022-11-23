import { tiposuscripcion } from './../../../module/tiposuscripcion';
import { TiposuscripcionService } from './../../../service/tiposuscripcion.service';
import { TiposuscripcionDialogoComponent } from './tiposuscripcion-dialogo/tiposuscripcion-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-tiposuscripcion-listar',
  templateUrl: './tiposuscripcion-listar.component.html',
  styleUrls: ['./tiposuscripcion-listar.component.css']
})
export class TiposuscripcionListarComponent implements OnInit {
  lista: tiposuscripcion[] = [];
  dataSource: MatTableDataSource<tiposuscripcion> = new MatTableDataSource();
  displayedColumns: string[] = ['id','descripcion_tipo','acciones', 'accion2'];
  private idMayor: number = 0;
  constructor(private ps: TiposuscripcionService, private dialog: MatDialog) { }

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
    this.dialog.open(TiposuscripcionDialogoComponent);
  }

  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      })
    });
  }

}
