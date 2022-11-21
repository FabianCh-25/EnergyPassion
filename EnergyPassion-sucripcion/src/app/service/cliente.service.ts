import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { EmptyExpr } from '@angular/compiler';
import { Cliente } from './../module/cliente'; //de no aparecer lo agreags

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url: string = "http://localhost:8083/clientes"
  private listaCambio = new Subject<Cliente[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Cliente[]>(this.url)
  }
  insertar(trainer: Cliente) {
    return this.http.post(this.url, trainer);
  }
  setLista(listaNueva: Cliente[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(cliente:Cliente) {
    return this.http.put(this.url + "/" + cliente.idcliente, cliente);
  }
  Listarid(id:number) {
    return this.http.get<Cliente>(`${this.url}/${id}`);
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
      return this.http.post<Cliente[]>(`${this.url}/buscar`, texto.toLowerCase(),{  
      });
    }
    return EMPTY;
  }
  
}
