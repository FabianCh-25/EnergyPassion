import { ReservacreaditaComponent } from './page/reserva/reservacreadita/reservacreadita.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NgModule, Component } from '@angular/core';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { TrainerComponent } from './page/trainer/trainer.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { ClienteDialogoComponent } from './page/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { Calificacion } from './module/calificacion';
import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { CalificacioncreaditaComponent } from './page/calificacion/calificacioncreadita/calificacioncreadita.component';
import { CalificaciondeleteComponent } from './page/calificacion/calificacionlistar/calificaciondelete/calificaciondelete.component';

const routes: Routes = [
  //{path: 'menu', component: HomeComponent},
  {path: 'menu', component: HomeComponent,children:[]},

  {
  path: 'clientes',component: ClienteComponent,children:[
    { path: 'nuevo', component: ClienteCreaeditaComponent },
    { path: 'edicion/:id', component: ClienteCreaeditaComponent }

  ]},
  {path: 'propietarios', component: PropietarioComponent,children:[]},
  {
  path: 'trainers',component: TrainerComponent, children:[]},
  {path: 'calificacion', component: CalificacionComponent,children:[
    {path: 'nuevo', component:CalificacioncreaditaComponent},
    {path:'edicion/:id',component:CalificacioncreaditaComponent}
  ]},
    {path:'reserva',component:ReservaComponent,children:[
      {path:'nuevo',component:ReservacreaditaComponent},
      {path:'edicion/:id',component:ReservacreaditaComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
