import { Trainer } from './../module/trainer';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { EmptyExpr } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {
   private url: string = "http://localhost:8083/trainer"
  private listaCambio = new Subject<Trainer[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

//private url:string=`${environment.host_2}`;
 // constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Trainer[]>(this.url)
  }
  insertar(trainer: Trainer) {
    return this.http.post(this.url, trainer);
  }
  setLista(listaNueva: Trainer[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(trainer:Trainer) {
    return this.http.put(this.url + "/" + trainer.idtrainer, trainer);
  }
  Listarid(id:number) {
    return this.http.get<Trainer>(`${this.url}/${id}`);
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
      return this.http.post<Trainer[]>(`${this.url}/buscar`, texto.toLowerCase(),{  
      });
    }
    return EMPTY;
  }
  
}
