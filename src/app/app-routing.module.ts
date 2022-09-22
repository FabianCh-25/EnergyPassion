import { TipoSubscripcionComponent } from './page/tipo-subscripcion/tipo-subscripcion.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { TrainerComponent } from './page/trainer/trainer.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
const routes: Routes = [{
  path: 'propietarios', component: PropietarioComponent,children:[]},
  {
  path: 'trainers',component: TrainerComponent, children:[]},
  {
  path: 'clientes',component: ClienteComponent,children:[
    { path: 'nuevo', component: ClienteCreaeditaComponent }
  ]},
  {
    path: 'tipo_subscripcion', component: TipoSubscripcionComponent, children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
