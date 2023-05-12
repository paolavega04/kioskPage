import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  randomNumber: number = 0;
  variableName: string = '';

  
  setRandomNumber(value: number, name: string) {
    this.randomNumber = value;
    this.variableName = name;
  }
  
  getRandomNumber() {
    return this.randomNumber;
  }
}