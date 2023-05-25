import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  timestamp = new Date();
  constructor(private router: Router){
    this.timestamp = new Date()
  }  
  bmi(){
      this.router.navigate(['bmi']);
    }
  login(){
      this.router.navigate(['login']);
  }
}
