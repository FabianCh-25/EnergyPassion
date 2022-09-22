import { Tipo_Subscripcion } from './../module/tipo_subscripcion';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoSubscripcionService {
  private url:string=`${environment.host_tipoSubscripcion}`;

  constructor(private http:HttpClient) {}
    listar(){
      return this.http.get<Tipo_Subscripcion[]>(this.url);
    }
}