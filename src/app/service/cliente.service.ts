import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // de no aparecer lo agregas
import { Cliente } from './../module/cliente'; //de no aparecer lo agreags
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string=`${environment.host_clientes}`; //se crea variante url
  private listaCambio = new Subject<Cliente[]>()
  private confirmaEliminacion = new Subject<Boolean>()


  constructor(private http:HttpClient) { }
  //funcion listar
  listar(){
    return this.http.get<Cliente[]>(this.url);
  }
  insertar(cliente: Cliente) {
    return this.http.post(this.url, cliente);
  }
  setLista(listaNueva: Cliente[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(cliente: Cliente) {
    return this.http.put(this.url + "/" + cliente.id, cliente);
  }
  listarId(id: number) {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }
  eliminarId(id:number) {
    return this.http.delete(this.url+"/"+id);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmarEliminacon(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }
}
