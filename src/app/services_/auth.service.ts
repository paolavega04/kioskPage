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
    pregunta_seguridad:number,
    respuesta_seguridad:string,
    placeholder_h:string,
    nombre_contacto_confianza:string,
    apellido_paterno_contacto_confianza:string,
    apellido_materno_contacto_confianza:string,
    plan_estatal:string,
    tel_contacto_confianza:string,
    correo_contacto_confianza:string,
    contrasena_contacto_confianza:string,
    pregunta_seguridad_contacto_confianza:string,
    respuesta_seguridad_confianza:string,
    condiciones:(number | undefined)[]): Observable<any> {
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
        pregunta_seguridad,
        respuesta_seguridad,
        placeholder_h,
        nombre_contacto_confianza,
        apellido_paterno_contacto_confianza,
        apellido_materno_contacto_confianza,
        plan_estatal,
        tel_contacto_confianza,
        correo_contacto_confianza,
        contrasena_contacto_confianza,
        pregunta_seguridad_contacto_confianza,
        respuesta_seguridad_confianza,
        condiciones
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}

