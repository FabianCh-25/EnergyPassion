
import { Component,OnInit } from '@angular/core';
import { Cliente } from './../../../module/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { rutinas } from 'src/app/module/rutinas';
import { RutinasService } from 'src/app/service/rutinas.service';
import { subscripcion } from 'src/app/module/subscripcion';
import { SubscripcionService } from 'src/app/service/subscripcion.service';
@Component({
  selector: 'app-cliente-creaedita',
  templateUrl: './cliente-creaedita.component.html',
  styleUrls: ['./cliente-creaedita.component.css']
})

export class ClienteCreaeditaComponent implements OnInit {
  cliente: Cliente = new Cliente();
  mensaje: string = "";
  edicion: boolean = false;

  id: number = 0;
  listarutinas: rutinas[] = [];
  idrutinasselec: number = 0;
  listasuscripcion: subscripcion[] = [];
  idsuscripcionselec: number = 0;


  constructor(private clienteService:ClienteService ,
    private router: Router, private route: ActivatedRoute,private RutinasService: RutinasService,
    private SubscripcionService: SubscripcionService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.RutinasService.listar().subscribe(data => { this.listarutinas = data });
    this.SubscripcionService.listar().subscribe(data => { this.listasuscripcion = data });
  }
  aceptar():void{

    if (this.cliente.nombre.length > 0 && this.cliente.idcliente > 0) {
      let r = new rutinas();
      r.idrutinas = this.idrutinasselec;
      let s = new subscripcion();
      s.idsuscripcion = this.idsuscripcionselec;

      this.cliente.rutinas=r;
      this.cliente.suscripcion=s;

      if (this.edicion) {
        this.clienteService.modificar(this.cliente).subscribe(data => {
          this.clienteService.listar().subscribe(data => {
            this.clienteService.setLista(data);
          })
        })
      }
      else{
      this.clienteService.insertar(this.cliente).subscribe(data => {
        this.clienteService.listar().subscribe(data => {
          this.clienteService.setLista(data);
        });
        },err => {
          //this.mensaje=err
          console.log(err);
      })
    }
      this.router.navigate(['clientes']);
  }
      else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.clienteService.Listarid(this.id).subscribe(data => {
        this.cliente = data;
        console.log(data);
        this.idrutinasselec = data.rutinas.idrutinas;
        //console.log(data);
        this.idsuscripcionselec = data.suscripcion.idsuscripcion;
      })
    }

  }

}
