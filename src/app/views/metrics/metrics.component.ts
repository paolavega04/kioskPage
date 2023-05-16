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

  storage(){
    this.router.navigate(['storage']);
  }
}
