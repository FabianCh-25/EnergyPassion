import { Trainer } from './../module/trainer';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
private url:string=`${environment.host_2}`;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Trainer[]>(this.url);
  }
}
