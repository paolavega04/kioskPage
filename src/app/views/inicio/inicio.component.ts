import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

import { AuthService } from 'src/app/services_/auth.service';
import { StorageService } from 'src/app/services_/storage.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  timestamp_vitales_uno: Date;
  constructor(private router: Router, private storageService: StorageService, private authService: AuthService, private timestampService: TimestampService){
    this.timestamp_vitales_uno = this.timestampService.getTimestamp();
  }  
  bmi(){
    this.timestampService.post_timestamp('vitales_dos', new Date());
    this.router.navigate(['bmi']);
  }
  login(){
    this.timestampService.post_timestamp('final', new Date());
    this.router.navigate(['login']);
}
  isLoggedIn = false;
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        this.timestampService.post_timestamp('final', new Date());
        this.storageService.clean();
        this.router.navigate(["login"]);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
