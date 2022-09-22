import { Cliente } from './../../../module/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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


  constructor(private clienteService:ClienteService ,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar():void{

    if (this.cliente.nombre.length > 0 && this.cliente.id > 0) {
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
        })
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
      this.clienteService.listarId(this.id).subscribe(data => {
        this.cliente = data;
      })
    }

  }

}
