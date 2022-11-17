import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteListarComponent } from './page/cliente/cliente-listar/cliente-listar.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ClienteDialogoComponent } from './page/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClienteBuscarComponent } from './page/cliente/cliente-buscar/cliente-buscar.component';
import { HomeComponent } from './page/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './page/footer/footer.component';
import { RutinasComponent } from './page/rutinas/rutinas.component';
import { RutinasListarComponent } from './page/rutinas/rutinas-listar/rutinas-listar.component';
import { RutinasCreaeditaComponent } from './page/rutinas/rutinas-creaedita/rutinas-creaedita.component';
import { RutinasDialogoComponent } from './page/rutinas/rutinas-listar/rutinas-dialogo/rutinas-dialogo.component';
import { TrainerCreaeditaComponent } from './page/trainer/trainer-creaedita/trainer-creaedita.component';
import { TrainerBuscarComponent } from './page/trainer/trainer-buscar/trainer-buscar.component';
import { TrainerDialogoComponent } from './page/trainer/trainer-listar/trainer-dialogo/trainer-dialogo.component';

import { LoginComponent } from './page/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PropietarioComponent,
    PropietarioListarComponent,
    TrainerComponent,
    TrainerListarComponent,
    ClienteComponent,
    ClienteListarComponent,
    ClienteCreaeditaComponent,
    ClienteDialogoComponent,
    ClienteBuscarComponent,
    HomeComponent,
    FooterComponent,
    RutinasComponent,
    RutinasListarComponent,
    RutinasCreaeditaComponent,
    RutinasDialogoComponent,
    TrainerCreaeditaComponent,
    TrainerBuscarComponent,

    TrainerDialogoComponent,
    LoginComponent

    TrainerDialogoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
