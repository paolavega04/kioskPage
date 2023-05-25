import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  timestamp: Date;
  
  constructor(private router: Router, private timestampService: TimestampService){
    this.timestamp = this.timestampService.getTimestamp();
  }  
  pressure(){
      this.router.navigate(['pressure']);
    }
    login(){
      this.router.navigate(['login']);
  }
}
