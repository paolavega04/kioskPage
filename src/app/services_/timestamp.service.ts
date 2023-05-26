import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// remplazar liga
const API = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TimestampService {

  constructor(private http: HttpClient) {}

  getTimestamp(): Date {
    return new Date();
  }
  post_timestamp(label: string, date: Date): Observable<any> {
    console.log('Sending date data:', date);
    
    // remplazar lo que se manda a post por los argumentos correctos para su api
    return this.http.post(API + 'timestamp/', {
        label_db: label,
        date_db: date
    }, httpOptions);
  }

}