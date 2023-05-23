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
export class VitalsService {
  constructor(private http: HttpClient) {}

  post_vitals( 
    id_cliente:number, 
    id_sucursal:number, 
    ritmo_cardiaco:number,
    frecuencia_respiratoria:number, 
    peso:number, 
    indice_masa_corporal:number,
    saturacion_oxigeno:number, 
    temperatura:number, 
    presion_sanguinea_sistolica:number, 
    presion_sanguinea_diastolica:number,
    altura:number
    ): Observable<any> {
    return this.http.post(
      VITALS_API + 'vitals/2',
      { 
        id_cliente, 
        id_sucursal, 
        ritmo_cardiaco,
        frecuencia_respiratoria, 
        peso, 
        indice_masa_corporal,
        saturacion_oxigeno, 
        temperatura, 
        presion_sanguinea_sistolica, 
        presion_sanguinea_diastolica,
        altura
      },
    );
  }

}
