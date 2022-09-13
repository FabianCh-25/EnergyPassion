import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url = "http://localhost:3000"
  constructor(private http:HttpClient)
   {
    console.log('Servicio Cliente')

  }
  getClientes(){
    let headers = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this.url,{
      headers: headers
    });
  }
}
