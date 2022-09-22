import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { TrainerComponent } from './page/trainer/trainer.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { TrainercreaeditaComponent } from './page/trainer/trainercreaedita/trainercreaedita.component';
const routes: Routes = [{
  path: 'propietarios', component: PropietarioComponent,children:[]},
  {
  path: 'trainer',component: TrainerComponent, children:[{ path: 'nuevo', component: TrainercreaeditaComponent},
  {path: 'edicion/:id', component: TrainercreaeditaComponent  }

]},
  {
  path: 'clientes',component: ClienteComponent,children:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
