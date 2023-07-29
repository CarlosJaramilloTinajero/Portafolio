import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Popup } from '../Models/popup';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  endpoint: string = 'https://api.peliculas.beauty';
  urlPopUp: string = "/checkPup";
  urlPortafolio: string = '/portafolio';

  constructor(private http: HttpClient) { }

  checkPup(type: number): Observable<any> {
    let typeM = new Popup();
    typeM.id = 1;
    typeM.type = type;
    return this.http.post<Popup>(this.endpoint + this.urlPopUp, typeM);
  }

  portafolio(): Observable<any> {
    return this.http.post<any>(this.endpoint + this.urlPortafolio, {});
  }

}
