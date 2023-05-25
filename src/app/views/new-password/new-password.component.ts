import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  timestamp_nueva_contrasena: Date;
  constructor(private router: Router,private timestampService: TimestampService) {
    this.timestamp_nueva_contrasena = this.timestampService.getTimestamp();
  }
    login(){
      this.router.navigate(['login']);
    }
}
