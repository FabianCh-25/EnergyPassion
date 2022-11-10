import { Injectable } from '@angular/core';
import { tiposuscripcion } from './../module/tiposuscripcion';

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { EmptyExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TiposuscripcionService {

  url: string = "http://localhost:5000/tiposubscripcion"
  private listaCambio = new Subject<tiposuscripcion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<tiposuscripcion[]>(this.url)
  }
  insertar(tiposuscripcion: tiposuscripcion) {
    return this.http.post(this.url, tiposuscripcion);
  }
  setLista(listaNueva: tiposuscripcion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tiposuscripcion:tiposuscripcion) {
    return this.http.put(this.url + "/" + tiposuscripcion.id, tiposuscripcion);
  }
  Listarid(id:number) {
    return this.http.get<tiposuscripcion>( `${this.url}/${id}`);
  }
  eliminar(id:number){
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: boolean){
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string){
    if(texto.length != 0){
      return this.http.post<tiposuscripcion[]>(`${this.url}/buscar`, texto.toLowerCase(),{  
      });
    }
    return EMPTY;
  }
  
}


