import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  generateRandomValues() {
    console.log('Generating random values...');
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
}
