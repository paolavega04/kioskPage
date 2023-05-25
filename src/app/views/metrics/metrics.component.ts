import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetricsService } from 'src/app/metrics.service';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  variables: { name: string; min: number; max: number, unit: string, value?: number | null }[] = [];
  timestamp_lectura: Date;

  constructor(private metricsService: MetricsService, private router: Router, private timestampService: TimestampService) {
    this.metricsService.variables;
    this.variables = this.metricsService.variables;
    this.timestamp_lectura = this.timestampService.getTimestamp();
  }
  
  ngOnInit(): void {

  }

  storage(){
    this.router.navigate(['storage']);
  }
}