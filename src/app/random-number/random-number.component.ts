import { Component } from '@angular/core';
import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent {
  variables = [
    { name: 'ritmo_cardiaco', min: 60, max: 100, value: 0 },
    { name: 'frecuencia_respiratoria', min: 10, max: 20, value: 0 },
    { name: 'saturacion_oxigeno', min: 100, max: 90, value: 0 },
    { name: 'temperatura', min: 36.0, max: 37.3, value: 0.0.toFixed(1)},
    { name: 'presion_sanguinea_sistolica', min: 170, max: 110, value: 0 },
    { name: 'presion_sanguinea_diastolica', min: 80, max: 90, value: 0 },
    { name: 'peso', min: 40, max: 105, value: 0 },
    { name: 'estatura', min: 150, max: 198, value: 0 }
  ];

  constructor(private randomNumberService: RandomNumberService) {}

  generateRandomNumbers() {
    for (let variable of this.variables) {
      if (variable.name === 'temperatura') {
        variable.value = parseFloat((Math.random() * (variable.max - variable.min) + variable.min).toFixed(1));
      } else {
        variable.value = Math.floor(Math.random() * (variable.max - variable.min + 1) + variable.min);
      }
      this.randomNumberService.setRandomNumber(variable.value, variable.name);
    }
  }
}