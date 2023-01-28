import { ObreroInterface } from './../interfaces/obrero.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObreroService {

  modulo:string = "obrero";
  api:string = "https://localhost:7186";

  constructor(private http:HttpClient) { }

  GetObreros(dni:string){

    if(dni != ""){
    return  this.http.get<ObreroInterface[]>(`${this.api}/${this.modulo}/GetObrerosDni/${dni}`);
    }else{
      return  this.http.get<ObreroInterface[]>(`${this.api}/${this.modulo}/GetObreros`);
    }

  }

  // GetObrerosTipo(tipotraba:string){
  //   return  this.http.get<ObreroInterface[]>(`${this.api}/${this.modulo}/GetObrerosTipo/${tipotraba}`);
  // }

  // GetObrerosDni(dni:string){
  //   return  this.http.get<ObreroInterface[]>(`${this.api}/${this.modulo}/GetObrerosDni/${dni}`);
  // }
}
