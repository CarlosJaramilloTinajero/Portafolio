import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Popup } from '../Models/popup';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  url: string = "https://api.peliculas.beauty/checkPup";
  constructor(private http: HttpClient) { }

  checkPup(type: number): Observable<any> {
    let typeM = new Popup();
    typeM.id = 1;
    typeM.type = type;
    return this.http.post<Popup>(this.url, typeM);

  }
}
