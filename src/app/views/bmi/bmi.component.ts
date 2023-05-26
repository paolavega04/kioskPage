import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  timestamp_vitales_dos: Date;
  
  constructor(private router: Router, private timestampService: TimestampService){
    this.timestamp_vitales_dos = this.timestampService.getTimestamp();
  }  
  pressure(){
    this.timestampService.post_timestamp('vitales_tres', new Date());
    this.router.navigate(['pressure']);
}
  login(){
    this.timestampService.post_timestamp('final', new Date());
    this.router.navigate(['login']);
}
}
