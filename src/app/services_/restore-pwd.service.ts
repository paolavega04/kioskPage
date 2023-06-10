import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const VITALS_API = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class RestoreService {
    constructor(private http: HttpClient) {}
  
    restorepwd(correo: string, respuesta_seguridad: string): Observable<any> {
      return this.http.post(
        AUTH_API + 'restorepwd',
        {
          correo,
          respuesta_seguridad
        },
        httpOptions
      );
    }

    get_new_pwd(pwdCliente: string, 
                pwdContacto: string, 
                preguntaCliente: string, 
                preguntaContacto: string): 
    Observable<any> {
      return this.http.post(
        VITALS_API + 'recover_vitals/:userid',
        {
          pwdCliente, 
          pwdContacto, 
          preguntaCliente, 
          preguntaContacto
        },
        httpOptions
      );
    }

    
};