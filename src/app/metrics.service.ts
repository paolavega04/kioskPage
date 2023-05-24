import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  variables: { name: string; min: number; max: number, unit: string, value?: number | null}[] = [

    {
      name: 'Ritmo Cardíaco',
      value: null,
      min: 50,
      max: 120,
      unit: 'bpm'
    },
    {
      name: 'Frecuencia Respiratoria',
      value: null,
      min: 10,
      max: 20,
      unit: 'RRp'
    },
    {
      name: 'Peso',
      value: null,
      min: 40.0,
      max: 110.0,
      unit: 'kg'
    },
    {
      name: 'IMC',
      value: null,
      min: 20.0,
      max: 32.0,
      unit: 'kg/m2'
    },
    {
      name: 'Saturación de Oxígeno',
      value: null,
      min: 90,
      max: 100,
      unit: 'SpO2%'
    },
    {
      name: 'Temperatura',
      value: null,
      min: 36.0,
      max: 37.2,
      unit: '°C'
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
      name: 'Altura',
      value: null,
      min: 1.42,
      max: 2.00,
      unit: 'mmHg'
    }


  ];

  constructor(private router: Router) { }

  generateRandomValues() {
    console.log('Generating random values...');
    this.variables.forEach((variable) => {
      if (variable.name === 'Temperatura' || variable.name === 'Peso' || variable.name === 'Altura' || variable.name === 'IMC') {
        variable.value = +(Math.random() * (variable.max - variable.min) + variable.min).toFixed(1);
      } else {
        variable.value = Math.floor(Math.random() * (variable.max - variable.min + 1) + variable.min);
      }
    });
  }
  

  getVariables(): { }[] {
    return this.variables;
  }

  navigateToMetrics() {
    this.router.navigate(['metrics'], { state: { variables: this.variables } });
  }
}


