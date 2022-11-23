import { TiposuscripcionService } from './../../../../service/tiposuscripcion.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tiposuscripcion-dialogo',
  templateUrl: './tiposuscripcion-dialogo.component.html',
  styleUrls: ['./tiposuscripcion-dialogo.component.css']
})
export class TiposuscripcionDialogoComponent implements OnInit {

  constructor(private TiposuscripcionService: TiposuscripcionService,
    private dialogRef: MatDialogRef<TiposuscripcionDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.TiposuscripcionService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
