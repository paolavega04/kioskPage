import { Component } from '@angular/core';
import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.css']
})
export class DisplayNumberComponent {
  randomNumber: number = 0;

  constructor(private randomNumberService: RandomNumberService) {}

  ngOnInit() {
    this.randomNumber = this.randomNumberService.getRandomNumber();
  }
}