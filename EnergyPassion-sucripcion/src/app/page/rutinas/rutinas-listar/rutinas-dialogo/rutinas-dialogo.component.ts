import { RutinasService } from 'src/app/service/rutinas.service';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-rutinas-dialogo',
  templateUrl: './rutinas-dialogo.component.html',
  styleUrls: ['./rutinas-dialogo.component.css']
})
export class RutinasDialogoComponent implements OnInit {

  constructor(private rutinasService:RutinasService, private dialogRef: MatDialogRef<RutinasDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.rutinasService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
