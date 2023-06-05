import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetricsService } from 'src/app/services_/metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  variables: { name: string; min: number; max: number, unit: string, value?: number | null }[] = [];

  constructor(private metricsService: MetricsService, private router: Router) {
    this.metricsService.variables;
    this.variables = this.metricsService.variables;
  }
  
  ngOnInit(): void {

  }

  storage(){
    this.router.navigate(['storage']);
  }
}