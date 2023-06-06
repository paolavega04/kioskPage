import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services_/storage.service';


@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  variables: { name: string; min: number; max: number, unit: string, value?: number | null}[] = [

    {
      name: 'Ritmo Cardíaco',
      value: null,
      min: 50,
      max: 111,
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
      max: 1.44,
      unit: 'm'
    },
    {
      name: 'IMC',
      value: null,
      min: 15.0,
      max: 35.0,
      unit: 'kg/m2'
    },


  ];

  constructor(private router: Router, private storageService: StorageService) { }


  generateRandomValues() {
    console.log('Generating random values...');
  
    // Get the user's gender from the storage service
    const user = this.storageService.getUser();
    const genero = user.genero; // Assuming the gender property is present in the user object
    const padecimiento = user.padecimiento; //Asuming null, 1, 2 as Normal, Diabetes Type 2, Hipertension
  
    this.variables.forEach((variable) => {
      
        if (variable.name === 'Temperatura') {
          variable.value = +(this.generateRandomFromDistribution(variable.min, variable.max, 1, 36.6, 0.6)).toFixed(1);
        } else if (variable.name === 'Altura') {
          if (genero === 'femenino') {
            variable.min = 1.40;  // Adjust the minimum height value for females
            variable.max = 1.81;  // Adjust the maximum height value for females
            const [average, standardDeviation] = [1.55, 0.05];
            variable.value = +(this.generateRandomFromDistribution(variable.min, variable.max, 2, average, standardDeviation)).toFixed(2);
          } else if (genero === 'masculino') {
            variable.min = 1.54;  // Adjust the minimum height value for males
            variable.max = 1.92;  // Adjust the maximum height value for males
            const [average, standardDeviation] = [1.67, 0.05];
            variable.value = +(this.generateRandomFromDistribution(variable.min, variable.max, 2, average, standardDeviation)).toFixed(2);
          }
        } else if (variable.name === 'Peso') {
          if (genero === 'femenino') {
            variable.min = 45.2;  // Adjust the minimum weight value for females
            variable.max = 85.8;  // Adjust the maximum weight value for females
            const [average, standardDeviation] = [67.7, 3];
            variable.value = +(this.generateRandomFromDistribution(variable.min, variable.max, 1, average, standardDeviation)).toFixed(1);
          } else if (genero === 'masculino') {
            variable.min = 50.9;  // Adjust the minimum weight value for males
            variable.max = 92.1; // Adjust the maximum weight value for males
            const [average, standardDeviation] = [76.45, 3];
            variable.value = +(this.generateRandomFromDistribution(variable.min, variable.max, 1, average, standardDeviation)).toFixed(1);
          }
        } else if (variable.name === 'IMC') {
         const peso = this.variables.find((v) => v.name === 'Peso')?.value || 0;
         const altura = this.variables.find((v) => v.name === 'Altura')?.value || 0;
         variable.value = +(peso / (altura ** 2)).toFixed(1);
        
        } else if (variable.name === 'Ritmo Cardíaco') {
          if (padecimiento === null || (padecimiento > 2 && padecimiento !== 11)) {
            console.log(' Normal');

            const [average, standardDeviation] = [80, 20];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } else if (padecimiento === 1){
            console.log(' Diabetes II');
            const [average, standardDeviation] = [71.4, 12.5];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          }
          else if (padecimiento === 2){
            console.log(' Hipertension');
            const [average, standardDeviation] = [65, 4];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          }
        } else if (variable.name === 'Saturación de Oxígeno') {
          if (padecimiento === null || (padecimiento > 2 && padecimiento !== 11)) {
            const [average, standardDeviation] = [90, 5];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } else if (padecimiento === 1){
            const [average, standardDeviation] = [96.4, 1.6];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } else if (padecimiento === 2){
            const [average, standardDeviation] = [95, 1.33];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          }
        } else if (variable.name === 'Presión Sistólica') {
          if (padecimiento === null || (padecimiento > 2 && padecimiento !== 11)) {
            const [average, standardDeviation] = [150, 20];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } else if (padecimiento === 1){
             const [average, standardDeviation] = [142.3, 7.5];
             variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } else if (padecimiento === 2){
             const [average, standardDeviation] = [120, 5];
             variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          }
        } else if (variable.name === 'Presión Diastólica') {
          if (padecimiento === null || (padecimiento > 2 && padecimiento !== 11)) {
            const [average, standardDeviation] = [85, 5];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } else if (padecimiento === 1){
            const [average, standardDeviation] = [77.5, 9.6];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } else if (padecimiento === 2){
            const [average, standardDeviation] = [78, 3];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          }
        } else if (variable.name === 'Frecuencia Respiratoria') {
          if (padecimiento === null || (padecimiento > 2 && padecimiento !== 11)) {
            const [average, standardDeviation] = [14.8, 4.28];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } else if (padecimiento === 1 || padecimiento === 2) {
            const [average, standardDeviation] = [15.5, 2];
            variable.value = this.generateRandomFromDistribution(variable.min, variable.max, 0, average, standardDeviation);
          } 
        } else {
          variable.value = Math.floor(Math.random() * (variable.max - variable.min + 1) + variable.min);
        }
      });
    }
  
  
  generateRandomFromDistribution(min: number, max: number, decimals: number, average: number, standardDeviation: number): number {
    let value;
    do {
      const u = 1 - Math.random();
      const v = 1 - Math.random();
      const x = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      value = average + x * standardDeviation;
    } while (value < min || value > max);
  
    return +value.toFixed(decimals);
  }
  
  
  
  
  
  
  

  getVariables(): { }[] {
    return this.variables;
  }

  navigateToMetrics() {
    this.router.navigate(['metrics'], { state: { variables: this.variables } });
  }
}


