import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  timestamp: Date;
  
  constructor(private router: Router, private timestampService: TimestampService){
    this.timestamp = this.timestampService.getTimestamp();
  }  
  bmi(){
      this.router.navigate(['bmi']);
    }
  login(){
      this.router.navigate(['login']);
  }
}
