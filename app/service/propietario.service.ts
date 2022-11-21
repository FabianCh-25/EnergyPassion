import { Propietario } from '../module/propietario';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  private url:string=`http://localhost:5000/clientez`;
  //private url:string=`${environment.host_1}`;

  constructor(private http:HttpClient) {}
    listar(){
      return this.http.get<Propietario[]>(this.url);

    }
}
