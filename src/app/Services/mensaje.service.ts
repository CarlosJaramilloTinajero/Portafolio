import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from '../Models/mensaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  urlAdd: string = "https://api.peliculas.beauty/addMensaje";
  urlGet: string = "https://api.peliculas.beauty/getMensajes";
  urlDelet: string = "https://api.peliculas.beauty/deleteMsj/";
  constructor(private http: HttpClient) { }

  addMensaje(msj: Mensaje): Observable<any> {
    return this.http.post<Mensaje>(this.urlAdd, msj);
  }

  getMensajes(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.urlGet);
  }

  deleteMensaje(id: number): Observable<any> {
    return this.http.delete<any>(this.urlDelet + id);
  }
}
