import { MatDialogRef } from '@angular/material/dialog';
import { CalificacionService } from './../../../../service/calificacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificacion-dialogo',
  templateUrl: './calificacion-dialogo.component.html',
  styleUrls: ['./calificacion-dialogo.component.css']
})
export class CalificacionDialogoComponent implements OnInit {

  constructor(private calificaionS:CalificacionService,private dialogRef:MatDialogRef<CalificacionDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.calificaionS.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }

}
