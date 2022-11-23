
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
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteListarComponent } from './page/cliente/cliente-listar/cliente-listar.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { ClienteBuscarComponent } from './page/cliente/cliente-buscar/cliente-buscar.component';
import { ClienteDialogoComponent } from './page/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { TrainercreaeditaComponent } from './page/trainer/trainercreaedita/trainercreaedita.component';
import { TrainerDialogoComponent } from './page/trainer/trainer-listar/trainer-dialogo/trainer-dialogo.component';
import { TrainerComponent } from './page/trainer/trainer.component';
import { TrainerListarComponent } from './page/trainer/trainer-listar/trainer-listar.component';
import { TrainerBuscarComponent } from './page/trainer/trainer-buscar/trainer-buscar.component';
import { SubscripcionComponent } from './page/subscripcion/subscripcion.component';
import { SubscripcionListarComponent } from './page/subscripcion/subscripcion-listar/subscripcion-listar.component';
import { SubscripcionDialogoComponent } from './page/subscripcion/subscripcion-listar/subscripcion-dialogo/subscripcion-dialogo.component';
import { SubscripcionBuscarComponent } from './page/subscripcion/subscripcion-buscar/subscripcion-buscar.component';
import { SubscripcioncreaeditaComponent } from './page/subscripcion/subscripcioncreaedita/subscripcioncreaedita.component';
import { TiposuscripcionComponent } from './page/tiposuscripcion/tiposuscripcion.component';
import { TiposuscripcionBuscarComponent } from './page/tiposuscripcion/tiposuscripcion-buscar/tiposuscripcion-buscar.component';
import { TiposuscripcionListarComponent } from './page/tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-listar.component';
import { TiposuscripcioncreaeditaComponent } from './page/tiposuscripcion/tiposuscripcioncreaedita/tiposuscripcioncreaedita.component';
import { TiposuscripcionDialogoComponent } from './page/tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-dialogo/tiposuscripcion-dialogo.component';
import { CalificacionDialogoComponent } from './page/calificacion/calificacionlistar/calificacion-dialogo/calificacion-dialogo.component';
import { CalificacioncreaditaComponent } from './page/calificacion/calificacioncreadita/calificacioncreadita.component';
import { CalificacionBuscarComponent } from './page/calificacion/calificacion-buscar/calificacion-buscar.component';
import { CalificacionlistarComponent } from './page/calificacion/calificacionlistar/calificacionlistar.component';
import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { ReservacreaditaComponent } from './page/reserva/reservacreadita/reservacreadita.component';
import { ReservadeleteComponent } from './page/reserva/reservalistar/reservadelete/reservadelete.component';
import { ReservabuscarComponent } from './page/reserva/reservabuscar/reservabuscar.component';
import { ReservalistarComponent } from './page/reserva/reservalistar/reservalistar.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { RutinasComponent } from './page/rutinas/rutinas.component';
import { RutinasListarComponent } from './page/rutinas/rutinas-listar/rutinas-listar.component';
import { RutinasCreaeditaComponent } from './page/rutinas/rutinas-creaedita/rutinas-creaedita.component';
import { RutinasDialogoComponent } from './page/rutinas/rutinas-listar/rutinas-dialogo/rutinas-dialogo.component';
import { RutinasBuscarComponent } from './page/rutinas/rutinas-buscar/rutinas-buscar.component';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './page/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    PropietarioComponent,
    PropietarioListarComponent,
    TrainerComponent,
    TrainercreaeditaComponent,
    TrainerListarComponent,
    ClienteComponent,
    ClienteListarComponent,
    ClienteCreaeditaComponent,
    ClienteDialogoComponent,
    ClienteBuscarComponent,
    TrainerDialogoComponent,
    TrainerBuscarComponent,
    SubscripcionComponent,
    SubscripcionListarComponent,
    SubscripcionDialogoComponent,
    SubscripcionBuscarComponent,
    SubscripcioncreaeditaComponent,
    TiposuscripcionComponent,
    TiposuscripcionBuscarComponent,
    TiposuscripcionListarComponent,
    TiposuscripcioncreaeditaComponent,
    TiposuscripcionDialogoComponent,
    CalificacionComponent,
    CalificacionBuscarComponent,
    CalificacionlistarComponent,
    CalificacionDialogoComponent,
    CalificacioncreaditaComponent,
    ReservaComponent,
    ReservabuscarComponent,
    ReservalistarComponent,
    ReservadeleteComponent,
    ReservacreaditaComponent,
    RutinasComponent,
    RutinasListarComponent,
    RutinasCreaeditaComponent,
    RutinasDialogoComponent,
    RutinasBuscarComponent,
    HomeComponent
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
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
