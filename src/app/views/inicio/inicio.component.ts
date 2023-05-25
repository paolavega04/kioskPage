import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  timestamp_vitales_uno: Date;
  
  constructor(private router: Router, private timestampService: TimestampService){
    this.timestamp_vitales_uno = this.timestampService.getTimestamp();
  }  
  bmi(){
      this.router.navigate(['bmi']);
    }
  login(){
      this.router.navigate(['login']);
  }
}
