import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    loginForm!: FormGroup;
    timestamp_login: Date;

    constructor(private router: Router, private timestampService: TimestampService) {
      this.timestamp_login = this.timestampService.getTimestamp();
    }
    
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        psw: new FormControl(''),
      });
    }

    login(){
      this.router.navigate(['ucontact']);
    }
    cuenta(){
      this.router.navigate(['inicio']);
    }
    restore(){
      this.router.navigate(['restore-p']);
    }
}
