import { TiposuscripcionComponent } from './page/tiposuscripcion/tiposuscripcion.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { TrainerComponent } from './page/trainer/trainer.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { TrainercreaeditaComponent } from './page/trainer/trainercreaedita/trainercreaedita.component';
import { SubscripcionComponent } from './page/subscripcion/subscripcion.component';
import { SubscripcioncreaeditaComponent } from './page/subscripcion/subscripcioncreaedita/subscripcioncreaedita.component';
import { TiposuscripcioncreaeditaComponent } from './page/tiposuscripcion/tiposuscripcioncreaedita/tiposuscripcioncreaedita.component';

const routes: Routes = [{
  path: 'propietarios', component: PropietarioComponent,children:[]},
  {
  path: 'trainer',component: TrainerComponent, children:[{ path: 'nuevo', component: TrainercreaeditaComponent},
  {path: 'edicion/:id', component: TrainercreaeditaComponent  }

]},
 
  {
  path: 'clientes',component: ClienteComponent,children:[]},

  {path: 'subscripcion',component: SubscripcionComponent, children:
  [{ path: 'nuevo', component: SubscripcioncreaeditaComponent},
  {path: 'edicion/:id', component: SubscripcioncreaeditaComponent} ]},
  
  {path: 'tiposubscripcion',component: TiposuscripcionComponent, children:
  [{ path: 'nuevo', component: TiposuscripcioncreaeditaComponent},
  {path: 'edicion/:id', component: TiposuscripcioncreaeditaComponent} ]},

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
