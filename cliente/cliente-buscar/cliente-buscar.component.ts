import { Cliente } from './../../../module/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-buscar',
  templateUrl: './cliente-buscar.component.html',
  styleUrls: ['./cliente-buscar.component.css']
})
export class ClienteBuscarComponent implements OnInit {
texttoBuscar:string ="";
  constructor(private clienteS: ClienteService) { }

  ngOnInit(): void {
  }
  buscar (e:any){

    let array: Cliente[]=[];
    this.clienteS.listar().subscribe(data=>{
      data.forEach((element,index)=>{
        if (element.nombre.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.clienteS.setLista(array);
    })
  }

}
