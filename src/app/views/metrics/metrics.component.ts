import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetricsService } from 'src/app/metrics.service';
import { DatabaseService } from 'src/app/services/database.service';

 

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  variables: { name: string; min: number; max: number, unit: string, value?: number | null }[] = [];
  metricas: any[] = [];

 

  constructor(
    private metricsService: MetricsService,
    private databaseService: DatabaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
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

 

    this.fetchMetricas();
  }

 

  fetchMetricas(): void {
    this.databaseService.executeQuery('SELECT * FROM metricas')
      .then((results) => {
        this.metricas = results;
      })
      .catch((error) => {
        console.error('Error executing MySQL query:', error);
      });
  }

 

  insertMetricas(): void {
    const insertQuery = `INSERT INTO metricas (id_cliente,id_local,ritmo_cardiaco,frecuencia_respiratoria,peso,indice_masa_corporal,saturacion_oxigeno,temperatura,presion_sanguinea,altura) VALUES (2,7808,52,16,75,32,91,36.3,154,120)`;
    this.databaseService.executeQuery(insertQuery)
      .then(() => {
        console.log('Data inserted successfully');
        this.fetchMetricas(); // Refresh the metricas after inserting new values
      })
      .catch((error) => {
        console.error('Error executing MySQL query:', error);
      });
  }

 

  heart_rate: number = 12;
  resp_rate: number = 16;
  oxy_sat: number = 96;
  weight: number = 58;
  bmi: number = 22;
  temperature: number = 35;
  blood_press: number = 74.5;
  blood_press2: number = 122.5;

 

  storage() {
    this.router.navigate(['storage']);
  }
}