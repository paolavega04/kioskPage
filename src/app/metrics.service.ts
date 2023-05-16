import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  variables: { name: string; min: number; max: number, unit: string, value?: number | null}[] = [
    {
      name: 'temperatura',
      value: null,
      min: 36,
      max: 37.2,
      unit: '°C'
    },
    {
      name: 'frecuencia cardíaca',
      value: null,
      min: 50,
      max: 120,
      unit: 'bpm'
    },
    {
      name: 'presión sistólica',
      value: null,
      min: 80,
      max: 180,
      unit: 'mmHg'
    },
    {
      name: 'presión diastólica',
      value: null,
      min: 50,
      max: 120,
      unit: 'mmHg'
    },
    {
      name: 'peso',
      value: null,
      min: 40,
      max: 105,
      unit: 'kg'
    },
    {
      name: 'estatura',
      value: null,
      min: 150,
      max: 198,
      unit: 'cm'
    },
    {
      name: 'ritmo respiratorio',
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
      if (variable.name === 'temperatura') {
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
