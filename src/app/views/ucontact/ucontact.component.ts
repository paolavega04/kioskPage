import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-ucontact',
  templateUrl: './ucontact.component.html',
  styleUrls: ['./ucontact.component.css']
})
export class UcontactComponent {
  timestamp_registro: Date;
  constructor(private router: Router,private timestampService: TimestampService) {
    this.timestamp_registro = this.timestampService.getTimestamp();
  }
  salir(){
    this.timestampService.post_timestamp('final', new Date());
    this.router.navigate(['login']);
  }
  registro(){
    this.timestampService.post_timestamp('inicio', new Date());
    this.router.navigate(['inicio']);
}

}
