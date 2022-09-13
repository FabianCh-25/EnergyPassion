import { Component } from '@angular/core';
import { ClientesService } from './service/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EnergyPassion';

  constructor(
    private clienteService: ClientesService )
  {
    this.clienteService.getClientes().subscribe(resp =>{
      console.log(resp)

    })
  }
}
