import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MetricsService } from 'src/app/metrics.service';
import { VitalsService } from 'src/app/services_/data_vitals.service';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.css']
})
export class PressureComponent implements OnInit {
  constructor(private metricsService: MetricsService, private router: Router, private VitalsService: VitalsService ) {  console.log(this.metricsService);}

  ngOnInit(): void { }

  login() {
    this.router.navigate(['login']);
  }

  generateRandomMetrics(): void {
    this.metricsService.generateRandomValues();
  }

  navigateToMetrics(): void {
    this.router.navigate(['metrics']);
  }

  sendVitals(): void {
    this.VitalsService.post_vitals(
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
    );
  }

  metrics(): void {
    this.generateRandomMetrics(); // generate random values before navigating to the metrics page
    this.navigateToMetrics();
    this.sendVitals();

  }
}
