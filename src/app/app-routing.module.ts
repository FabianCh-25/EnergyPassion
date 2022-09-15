import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { TrainerComponent } from './page/trainer/trainer.component';
const routes: Routes = [{
  path: 'propietarios', component: PropietarioComponent,children:[]},
  {
  path: 'trainers',component: TrainerComponent, children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
