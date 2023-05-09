import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    loginForm!: FormGroup;

    constructor(private router: Router) {}

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        psw: new FormControl(''),
      });
    }

    login(){
      this.router.navigate(['dashboard']);
    }
    cuenta(){
      this.router.navigate(['inicio']);
    }
}
