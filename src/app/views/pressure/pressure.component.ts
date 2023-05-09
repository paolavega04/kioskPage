import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.css']
})
export class PressureComponent {
  constructor(private router: Router){}  
  resultados(){
      this.router.navigate(['resultados']);
    }
    login(){
      this.router.navigate(['login']);
  }
}
