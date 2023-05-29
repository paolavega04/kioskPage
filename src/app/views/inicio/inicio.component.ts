import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services_/auth.service';
import { StorageService } from 'src/app/services_/storage.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private router: Router, private storageService: StorageService, private authService: AuthService){}  
  bmi(){
      this.router.navigate(['bmi']);
    }
  login(){
      this.router.navigate(['login']);
  }
  isLoggedIn = false;
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.clean();
        this.router.navigate(["login"]);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
