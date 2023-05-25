import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MetricsService } from 'src/app/metrics.service';
import { VitalsService } from 'src/app/services_/data_vitals.service';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.css']
})
export class PressureComponent implements OnInit {
  timestamp_vitales_tres: Date;
  constructor(private metricsService: MetricsService, private router: Router, private VitalsService: VitalsService, private timestampService: TimestampService ) { 
     console.log(this.metricsService);
     this.timestamp_vitales_tres = this.timestampService.getTimestamp();
    }

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
    const vitalsData = {
      id_cliente: 1, // Replace with the appropriate value
      id_sucursal: 2, // Replace with the appropriate value
      ritmo_cardiaco: this.metricsService.variables[0].value,
      frecuencia_respiratoria: this.metricsService.variables[1].value,
      peso: this.metricsService.variables[2].value,
      indice_masa_corporal: this.metricsService.variables[3].value, // Set the appropriate value or remove this field if not needed
      saturacion_oxigeno: this.metricsService.variables[4].value, // Set the appropriate value or remove this field if not needed
      temperatura: this.metricsService.variables[5].value,
      presion_sanguinea_sistolica: this.metricsService.variables[6].value,
      presion_sanguinea_diastolica: this.metricsService.variables[7].value,
      altura: this.metricsService.variables[8].value // Set the appropriate value or remove this field if not needed
    };
    this.VitalsService.post_vitals(vitalsData).subscribe({
      next: (response) => {
        console.log('Vitals data sent successfully:', response);
        // Handle the response here if needed
      },
      error: (error) => {
        console.log('Error while sending vitals data:', error);
        // Handle the error here if needed
      },
      complete: () => {
        console.log('Vitals data sending completed.');
        // Handle completion if needed
      }
    });
  }

  metrics(): void {
    this.generateRandomMetrics(); // generate random values before navigating to the metrics page
    this.navigateToMetrics();
    this.sendVitals();

  }
}
