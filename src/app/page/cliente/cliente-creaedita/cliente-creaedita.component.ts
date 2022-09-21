import { Cliente } from './../../../module/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-creaedita',
  templateUrl: './cliente-creaedita.component.html',
  styleUrls: ['./cliente-creaedita.component.css']
})
export class ClienteCreaeditaComponent implements OnInit {
  cliente: Cliente = new Cliente();
  mensaje: string = "";


  constructor(private clienteService:ClienteService ,private router: Router) { }

  ngOnInit(): void {}
  aceptar():void{

    if (this.cliente.nombre.length > 0 && this.cliente.id > 0) {

      this.clienteService.insertar(this.cliente).subscribe(data => {
        this.clienteService.listar().subscribe(data => {
          this.clienteService.setLista(data);
        })
      })
      this.router.navigate(['clientes']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
