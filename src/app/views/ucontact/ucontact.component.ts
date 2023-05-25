import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-ucontact',
  templateUrl: './ucontact.component.html',
  styleUrls: ['./ucontact.component.css']
})
export class UcontactComponent {
  timestamp: Date;
  constructor(private router: Router,private timestampService: TimestampService) {
    this.timestamp = this.timestampService.getTimestamp();
  }
  salir(){
    this.router.navigate(['login']);
  }
  registro(){
    this.router.navigate(['inicio']);
}

}
