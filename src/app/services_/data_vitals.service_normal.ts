import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const VITALS_API = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})


export class VitalsService {
  constructor(private http: HttpClient, private storageService: StorageService) {}
  post_vitals(data: any): Observable<any> {

    const id = this.storageService.getUser().id;


    console.log('Sending normal vitals data:', data);

    return this.http.post(VITALS_API + 'vitals/' + `${id}`, data, httpOptions);
  }
}


