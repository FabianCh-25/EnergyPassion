import { Trainer } from './../module/trainer';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {
 url: string = "http://localhost:5000/trainers"
  private listaCambio = new Subject<Trainer[]>()
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
    return this.http.put(this.url + "/" + trainer.id, trainer);
  }
  Listarid(id:number) {
    return this.http.get<Trainer>( `${this.url}/${id}`);
  }
  
}
