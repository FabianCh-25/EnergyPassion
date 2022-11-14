import { OffersInsertarComponent } from './page/offers/offers-insertar/offers-insertar.component';
import { OffersComponent } from './page/offers/offers.component';
import { CalificacionDialogoComponent } from './page/calificacion/calificacionlistar/calificacion-dialogo/calificacion-dialogo.component';
import { CalificacionCreaditaComponent } from './page/calificacion/calificacion-creadita/calificacion-creadita.component';
import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { TrainerCreaeditaComponent } from './page/trainer/trainer-creaedita/trainer-creaedita.component';
import { RutinasCreaeditaComponent } from './page/rutinas/rutinas-creaedita/rutinas-creaedita.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { TrainerComponent } from './page/trainer/trainer.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { ClienteDialogoComponent } from './page/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { RutinasComponent } from './page/rutinas/rutinas.component';
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
    path: 'trainer',component: TrainerComponent, children:[{ path: 'nuevo', component: TrainerCreaeditaComponent},
    {path: 'edicion/:id', component: TrainerCreaeditaComponent  }

  ]},
  {
    path: 'rutinas',component: RutinasComponent, children:[
      {path: 'nuevo', component: RutinasCreaeditaComponent},
      {path: 'edicion/:id', component:RutinasCreaeditaComponent}
    ]},
    {
    path:'calificaciones', component:CalificacionComponent,children:[
      {path:'nuevo',component:CalificacionCreaditaComponent},
      {path: 'edicion/:id', component:CalificacionCreaditaComponent}
    ]},
  { 
    path:'offers',component:OffersComponent,children:[
      {path:'nuevo',component:OffersInsertarComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
