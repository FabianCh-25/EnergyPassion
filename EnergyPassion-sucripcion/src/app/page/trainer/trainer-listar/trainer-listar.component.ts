import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from './../../../module/trainer';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { TrainerDialogoComponent } from './trainer-dialogo/trainer-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trainer-listar',
  templateUrl: './trainer-listar.component.html',
  styleUrls: ['./trainer-listar.component.css']
})
export class TrainerListarComponent implements OnInit {
  lista: Trainer[] = [];
  dataSource: MatTableDataSource<Trainer> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'apellido', 'horario', 'edad', 'nickname', 'sexo', 'email', 'horario', 'password','idcalificacion', 'rutinas','acciones', 'accion2'];
  private idMayor: number = 0;
  constructor(private ps: TrainerService, private dialog: MatDialog) { }

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
    this.dialog.open(TrainerDialogoComponent);
  }

  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      })
    });
  }

}
