import { Trainer } from './../../../module/trainer';
import { TrainerService } from './../../../service/trainer.service';
import { Reserva } from './../../../module/reserva';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Cliente } from 'src/app/module/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ReservaService } from 'src/app/service/reserva.service';
import { RutinasService } from 'src/app/service/rutinas.service';
import { rutinas } from 'src/app/module/rutinas';
//falta rutinas

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
 listacliente: Cliente[] = [];
 idclienteselec: number = 0;
 listatrainer: Trainer[] = [];
  idtrainerselec: number = 0;
  listarutina: rutinas[] = [];
  idrutinaselec: number = 0;

 constructor(private reservaService:ReservaService,private router: Router, private route:ActivatedRoute,
   private TrainerService: TrainerService, private ClienteService:ClienteService,private RutinasService:RutinasService){}

  ngOnInit():void{
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
  });
  this.TrainerService.listar().subscribe(data => { this.listatrainer = data });
  this.ClienteService.listar().subscribe(data => { this.listacliente = data });
  this.RutinasService.listar().subscribe(data => { this.listarutina = data });
  }
  aceptar():void{
    if (this.reserva.idreserva > 0 ) {
      let t = new Trainer();
      t.idtrainer = this.idtrainerselec; //Aqui se toma como referencia el id de tipo de suscricpion
      this.reserva.trainer = t;
      let r = new rutinas();
      r.idrutinas = this.idrutinaselec; //Aqui se toma como referencia el id de tipo de suscricpion
      this.reserva.rutinas = r;
      let c = new Cliente();
      c.idcliente = this.idclienteselec; //Aqui se toma como referencia el id de tipo de suscricpion
      this.reserva.cliente = c;
       if(this.edicion) {
        this.reservaService.modificar(this.reserva).subscribe(data => {
          this.reservaService.listar().subscribe(data => {
            this.reservaService.setLista(data);
          });
        })
      }
      else{
      this.reservaService.insertar(this.reserva).subscribe(data => {
        this.reservaService.listar().subscribe(data => {
          this.reservaService.setLista(data);
        });
      },err => {
        //this.mensaje=err
        console.log(err);
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
    this.reservaService.Listarid(this.id).subscribe(data => {
      this.reserva = data;
      console.log(data);
      this.idtrainerselec = data.trainer.idtrainer;
      this.idrutinaselec = data.rutinas.idrutinas;
      this.idclienteselec = data.cliente.idcliente;
    })
  }

}
}
