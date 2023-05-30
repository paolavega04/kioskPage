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


export class VitalsServiceDes {
  constructor(private http: HttpClient, private storageService: StorageService) {}
  post_vitalsDes(data: any): Observable<any> {
    const id = this.storageService.getUser().id;
    return this.http.post(VITALS_API + 'desensibilizada/vitals/'+`${id}`, data, httpOptions);
  }
}
