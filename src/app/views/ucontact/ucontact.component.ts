import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ucontact',
  templateUrl: './ucontact.component.html',
  styleUrls: ['./ucontact.component.css']
})
export class UcontactComponent {
  constructor(private router: Router) {}
  login(){
    this.router.navigate(['inicio']);
  }
}
