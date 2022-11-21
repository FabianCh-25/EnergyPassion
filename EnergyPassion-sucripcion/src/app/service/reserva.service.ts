import { Reserva } from 'src/app/module/reserva';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { EmptyExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private url: string = `http://localhost:8083/reserva` //cambiar el puerto
  private listaCambio = new Subject<Reserva[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<Reserva[]>(this.url)
  }
  insertar(reserva: Reserva) {
    return this.http.post(this.url, Reserva);
  }
  setLista(listaNueva: Reserva[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(reserva:Reserva) {
    return this.http.put(this.url + "/" + reserva.idreserva, reserva);
  }
  Listarid(id:number) {
    return this.http.get<Reserva>(`${this.url}/${id}`);
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
      return this.http.post<Reserva[]>(`${this.url}/buscar`, texto.toLowerCase(),{  
      });
    }
    return EMPTY;
  }
  
}
