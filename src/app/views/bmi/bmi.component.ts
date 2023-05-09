import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  constructor(private router: Router){}  
  pressure(){
      this.router.navigate(['pressure']);
    }
    login(){
      this.router.navigate(['login']);
  }
}
