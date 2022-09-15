//import { PropietarioModule } from './model/propietario';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropietarioListarComponent } from './page/propietario/propietario-listar/propietario-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { TrainerComponent } from './page/trainer/trainer.component';
import { TrainerListarComponent } from './page/trainer/trainer-listar/trainer-listar.component';
@NgModule({
  declarations: [
    AppComponent,
    PropietarioComponent,
    PropietarioListarComponent,
    TrainerComponent,
    TrainerListarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
