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
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TrainercreaeditaComponent } from './page/trainer/trainercreaedita/trainercreaedita.component';
import { TrainerDialogoComponent } from './page/trainer/trainer-listar/trainer-dialogo/trainer-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
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
    TiposuscripcionDialogoComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
