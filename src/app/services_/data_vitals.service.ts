import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const VITALS_API = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})


export class VitalsServiceDes {
  constructor(private http: HttpClient) {}
  post_vitalsDes(data: any): Observable<any> {
    console.log('Sending desen. vitals data:', data);
    return this.http.post(VITALS_API + 'desensibilizada/vitals/', data, httpOptions);
  }
}
