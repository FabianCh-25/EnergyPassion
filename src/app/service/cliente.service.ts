import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // de no aparecer lo agregas
import { Cliente } from './../module/cliente'; //de no aparecer lo agreags

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string=`${environment.host_clientes}`; //se crea variante url

  constructor(private http:HttpClient) { }
  //funcion listar
  listar(){
    return this.http.get<Cliente[]>(this.url);
  }
}
