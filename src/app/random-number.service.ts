import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  private randomNumber: number = 0;
  private variableName: string = '';

  constructor() { }

  setRandomNumber(value: number, name: string) {
    this.randomNumber = value;
    this.variableName = name;
  }

  getRandomNumber() {
    return this.randomNumber;
  }

  getVariableName() {
    return this.variableName;
  }
}