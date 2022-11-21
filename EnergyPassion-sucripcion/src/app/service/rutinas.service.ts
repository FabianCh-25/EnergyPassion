import { rutinas } from '../module/rutinas';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // de no aparecer lo agregas
import { EMPTY, Subject } from 'rxjs'
import { EmptyExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})


export class RutinasService {

  private url:string=`http://localhost:8083/rutinas`; //se crea variante url
  private listaCambio = new Subject<rutinas[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) {}

  listar(){
    return this.http.get<rutinas[]>(this.url);
  }
  insertar(rutinas: rutinas) {
    return this.http.post(this.url, rutinas);
  }
  setLista(listaNueva: rutinas[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(rutinas: rutinas) {
    return this.http.put(this.url + "" + rutinas.idrutinas, rutinas);
  }
  listarId(id: number) {
    return this.http.get<rutinas>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string){
    if(texto.length !=0) {
      return this.http.post<rutinas[]>(`${this.url}/buscar`, texto.toLowerCase(),{});
    }
    return EMPTY;
  }


}

