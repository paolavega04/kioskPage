import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services_/auth.service';
import { StorageService } from 'src/app/services_/storage.service';


@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  constructor(private router: Router, private authService: AuthService, private storageService: StorageService){}  
  pressure(){
      this.router.navigate(['pressure']);
    }
    login(){
      this.router.navigate(['login']);
  }
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
