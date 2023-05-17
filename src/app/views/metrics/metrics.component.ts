import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetricsService } from 'src/app/metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  variables: { name: string; min: number; max: number, unit: string, value?: number | null }[] = [];

  constructor(private metricsService: MetricsService, private router: Router, private route: ActivatedRoute) {
    const state = this.route.snapshot.paramMap.get('state');
    if (state) {
      this.variables = JSON.parse(state).variables;
      this.metricsService.variables = this.variables;
    }
    this.metricsService.generateRandomValues();
    this.variables = this.metricsService.variables;
  }
  
  ngOnInit(): void {
    const state = this.route.snapshot.paramMap.get('state');
    if (state) {
      this.variables = JSON.parse(state).variables;
      this.metricsService.variables = this.variables;
    }
  }

  heart_rate:number= 12;
  resp_rate:number= 16;
  oxy_sat:number= 96;
  weight:number= 58;
  bmi:number= 22;
  temperature:number= 35;
  blood_press:number= 74.5;
  blood_press2:number= 122.5;

  storage(){
    this.router.navigate(['storage']);
  }
}
