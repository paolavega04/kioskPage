import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VitalsService } from './services_/data_vitals.service';

const VITALS_API = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  variables: { name: string; min: number; max: number, unit: string, value?: number | null}[] = [
    {
      name: 'Temperatura',
      value: null,
      min: 36,
      max: 37.2,
      unit: '°C'
    },
    {
      name: 'Saturación de Oxígeno',
      value: null,
      min: 90,
      max: 100,
      unit: 'SpO2%'
    },
    {
      name: 'Frecuencia Cardíaca',
      value: null,
      min: 50,
      max: 120,
      unit: 'bpm'
    },
    {
      name: 'Presión Sistólica',
      value: null,
      min: 80,
      max: 180,
      unit: 'mmHg'
    },
    {
      name: 'Presión Diastólica',
      value: null,
      min: 50,
      max: 120,
      unit: 'mmHg'
    },
    {
      name: 'Peso',
      value: null,
      min: 40,
      max: 105,
      unit: 'kg'
    },
    {
      name: 'IMC',
      value: null,
      min: 27,
      max: 32,
      unit: 'kg/m2'
    },
    {
      name: 'Frecuencia Respiratoria',
      value: null,
      min: 10,
      max: 20,
      unit: 'RRp'
    }
  ];
  http: any;
//private vitalsService: VitalsService
  constructor(private router: Router, private vitalsService: VitalsService) { }

  generateRandomValues() {

    this.variables.forEach((variable) => {
      if (variable.name === 'Temperatura') {
        variable.value = +(Math.random() * (variable.max - variable.min) + variable.min).toFixed(1);
      } else {
        variable.value = Math.floor(Math.random() * (variable.max - variable.min + 1) + variable.min);
      }
    });
    
  }

  navigateToMetrics() {
    this.router.navigate(['metrics'], { state: { variables: this.variables } });
  }

  aah(){
    this.vitalsService.post_vitals(
      1, 
     1, 
     1,
     1, 
      1, 
      1,
     1, 
      1, 
     1, 
      1,
     1
     )
  }
  /*post_vitals( 
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
  }*/
  

}
