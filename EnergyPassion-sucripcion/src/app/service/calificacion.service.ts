import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calificacion } from '../module/calificacion';
import { environment } from 'src/environments/environment';
import { Subject, EMPTY } from 'rxjs';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { SafeResourceUrl } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
private url:string=`http://localhost:8083/calificacion`;

private listaCambio = new Subject<Calificacion[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Calificacion[]>(this.url);
  }
  insertar(calificacion:Calificacion){
return this.http.post(this.url, calificacion);
  }
  setLista(listaNueva:Calificacion[]){
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(calificacion:Calificacion){
    return this.http.put(this.url +"/"+calificacion.idcalificacion, calificacion);
  }
  listarId(id:number){
    return this.http.get<Calificacion>(`${this.url}/${id}`);
  }
  eliminarId(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmarEliminacion(estado:Boolean){
  this.confirmaEliminacion.next(estado);
}
buscar(texto:string){
  if(texto.length !=0){
    return this.http.post<Calificacion[]>(`${this.url}/buscar`, texto.toLowerCase(),{})

  }
  return EMPTY;
}

}
