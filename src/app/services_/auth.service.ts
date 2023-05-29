import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        correo,
        contrasena,
      },
      httpOptions
    );
  }

  register( 
    nombre:string, 
    apellido_paterno:string, 
    apellido_materno:string,
    genero:string, 
    correo:string, 
    telefono:string,  
    contrasena:string, 
    ciudad:string, 
    estado:string, 
    codigo_postal:string,
    a_nacimiento:string,
    respuesta_seguridad:string,
    placeholder:string,
    nombre_contacto_confianza:string,
    apellido_paterno_contacto_confianza:string,
    apellido_materno_contacto_confianza:string,
    relacion_cliente:string,
    tel_contacto_confianza:string,
    correo_contacto_confianza:string,
    contrasena_contacto_confianza:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      { 
        nombre, 
        apellido_paterno, 
        apellido_materno,
        genero, 
        correo, 
        telefono, 
        contrasena, 
        ciudad, 
        estado, 
        codigo_postal,
        a_nacimiento, 
        respuesta_seguridad,
        placeholder,
        nombre_contacto_confianza,
        apellido_paterno_contacto_confianza,
        apellido_materno_contacto_confianza,
        relacion_cliente,
        tel_contacto_confianza,
        correo_contacto_confianza,
        contrasena_contacto_confianza
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}

