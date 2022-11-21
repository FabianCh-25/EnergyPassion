import { MatDialogRef } from '@angular/material/dialog';
import { ReservaService } from 'src/app/service/reserva.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservadelete',
  templateUrl: './reservadelete.component.html',
  styleUrls: ['./reservadelete.component.css']
})
export class ReservadeleteComponent {
  constructor(private reservaS:ReservaService,private MatDialogRef:MatDialogRef<ReservadeleteComponent>){}
  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.reservaS.setConfirmaEliminacion(estado);
    this.MatDialogRef.close();
  }
}
