import { SubscripcionService } from './../../../../service/subscripcion.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-subscripcion-dialogo',
  templateUrl: './subscripcion-dialogo.component.html',
  styleUrls: ['./subscripcion-dialogo.component.css']
})
export class SubscripcionDialogoComponent implements OnInit {

  constructor(private SubscripcionService: SubscripcionService,
  private dialogRef: MatDialogRef<SubscripcionDialogoComponent>
  ) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.SubscripcionService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
}
}
