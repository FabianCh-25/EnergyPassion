import { Reserva } from './../../../module/reserva';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

import { ReservaService } from 'src/app/service/reserva.service';
@Component({
  selector: 'app-reservacreadita',
  templateUrl: './reservacreadita.component.html',
  styleUrls: ['./reservacreadita.component.css']
})
export class ReservacreaditaComponent {
 reserva: Reserva = new Reserva();
 mensaje:string="";
 edicion:boolean = false;
 id:number=0;
 constructor(private reservaService:ReservaService,private router: Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
  });
  }
  aceptar():void{
    if (this.reserva.idReserva > 0 && this.reserva.Fecha.length > 0 && this.reserva.Hora && this.reserva.Trainer && this.reserva.Cliente) {
      if (this.edicion) {
        this.reservaService.modificar(this.reserva).subscribe(data => {
          this.reservaService.listar().subscribe(data => {
            this.reservaService.setLista(data);
          })
        })
      }
      else{
      this.reservaService.insertar(this.reserva).subscribe(data => {
        this.reservaService.listar().subscribe(data => {
          this.reservaService.setLista(data);
        })
      })
    }
      this.router.navigate(['reserva']);
  }
  else {
    this.mensaje = "Complete los valores requeridos";
  }
}
init() {
  if (this.edicion) {
    this.reservaService.listarId(this.id).subscribe(data => {
      this.reserva = data;
    })
  }

}
}
