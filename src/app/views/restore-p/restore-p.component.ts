import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-restore-p',
  templateUrl: './restore-p.component.html',
  styleUrls: ['./restore-p.component.css']
})
export class RestorePComponent {
  timestamp_recuperacion_contrasena: Date;

    constructor(private router: Router,private timestampService: TimestampService) {
      this.timestamp_recuperacion_contrasena = this.timestampService.getTimestamp();
    }
    newp(){
      this.router.navigate(['new-password']);
    }
}
