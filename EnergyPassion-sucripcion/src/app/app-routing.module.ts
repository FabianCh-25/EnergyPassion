import { TiposuscripcionComponent } from './page/tiposuscripcion/tiposuscripcion.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { TrainerComponent } from './page/trainer/trainer.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { TrainercreaeditaComponent } from './page/trainer/trainercreaedita/trainercreaedita.component';
import { SubscripcionComponent } from './page/subscripcion/subscripcion.component';
import { SubscripcioncreaeditaComponent } from './page/subscripcion/subscripcioncreaedita/subscripcioncreaedita.component';
import { TiposuscripcioncreaeditaComponent } from './page/tiposuscripcion/tiposuscripcioncreaedita/tiposuscripcioncreaedita.component';
import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { CalificacioncreaditaComponent } from './page/calificacion/calificacioncreadita/calificacioncreadita.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { ReservacreaditaComponent } from './page/reserva/reservacreadita/reservacreadita.component';
import { RutinasComponent } from './page/rutinas/rutinas.component';
import { RutinasCreaeditaComponent } from './page/rutinas/rutinas-creaedita/rutinas-creaedita.component';

const routes: Routes = [{
  path: 'propietarios', component: PropietarioComponent,children:[]},

  {path: 'menu',component: RutinasComponent, children:[]},

  {
  path: 'trainer',component: TrainerComponent, children:[{ path: 'nuevo', component: TrainercreaeditaComponent},
  {path: 'edicion/:id', component: TrainercreaeditaComponent  }

]},
 
{path: 'clientes',component: ClienteComponent, children:
[{ path: 'nuevo', component: ClienteCreaeditaComponent},
{path: 'edicion/:id', component: ClienteCreaeditaComponent} ]},

  {path: 'suscripcion',component: SubscripcionComponent, children:
  [{ path: 'nuevo', component: SubscripcioncreaeditaComponent},
  {path: 'edicion/:id', component: SubscripcioncreaeditaComponent} ]},
  
  {path: 'tiposuscripcion',component: TiposuscripcionComponent, children:
  [{ path: 'nuevo', component: TiposuscripcioncreaeditaComponent},
  {path: 'edicion/:id', component: TiposuscripcioncreaeditaComponent} ]},

  {path: 'calificacion',component: CalificacionComponent, children:
  [{ path: 'nuevo', component: CalificacioncreaditaComponent},
  {path: 'edicion/:id', component: CalificacioncreaditaComponent} ]},
  
  {path: 'reserva',component: ReservaComponent, children:
  [{ path: 'nuevo', component: ReservacreaditaComponent},
  {path: 'edicion/:id', component: ReservacreaditaComponent} ]},

  {path: 'rutinas',component: RutinasComponent, children:[
    {path: 'nuevo', component: RutinasCreaeditaComponent},
    {path: 'edicion/:id', component:RutinasCreaeditaComponent}

  ]},
  
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
