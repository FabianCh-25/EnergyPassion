import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import {MatDialogRef}from '@angular/material/dialog'
@Component({
  selector: 'app-cliente-dialogo',
  templateUrl: './cliente-dialogo.component.html',
  styleUrls: ['./cliente-dialogo.component.css']
})
export class ClienteDialogoComponent implements OnInit {

  constructor(private clienteS: ClienteService, private dialogRef: MatDialogRef<ClienteDialogoComponent>
    ) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.clienteS.setConfirmarEliminacon(estado);
    this.dialogRef.close();
  }

}
