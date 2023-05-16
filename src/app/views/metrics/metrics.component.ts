import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent {
  constructor(private router: Router){}
  heart_rate:number= 12;
  resp_rate:number= 16;
  oxy_sat:number= 96;
  weight:number= 58;
  bmi:number= 22;
  temperature:number= 35;
  blood_press:number= 74.5;

  storage(){
    this.router.navigate(['storage']);
}
}
