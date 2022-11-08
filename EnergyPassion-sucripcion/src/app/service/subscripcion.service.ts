import { Subscripcion } from './../module/subscripcion';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { EmptyExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SubscripcionService {
  url: string = "http://localhost:5000/subscripcion"
  private listaCambio = new Subject<Subscripcion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<Subscripcion[]>(this.url)
  }
  insertar(Subscripcion: Subscripcion) {
    return this.http.post(this.url, Subscripcion);
  }
  setLista(listaNueva: Subscripcion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Subscripcion:Subscripcion) {
    return this.http.put(this.url + "/" + Subscripcion.id, Subscripcion);
  }
  Listarid(id:number) {
    return this.http.get<Subscripcion>( `${this.url}/${id}`);
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
      return this.http.post<Subscripcion[]>(`${this.url}/buscar`, texto.toLowerCase(),{  
      });
    }
    return EMPTY;
  }
  
}
