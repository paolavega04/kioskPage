import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services_/storage.service';
import { AuthService } from 'src/app/services_/auth.service';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
    //loginForm!: FormGroup;

    timestamp_login: Date;
    form: any = {
      correo: null,
      contrasena: null
    };

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private storageService:StorageService, private router: Router, private timestampService: TimestampService) {
      this.timestamp_login = this.timestampService.getTimestamp();
      this.timestampService.post_timestamp('start', this.timestamp_login);
    }
  
  
    
    ngOnInit(): void {

      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        const id_cliente = this.storageService.getUser().id;
        this.timestampService.post_timestamp('vitales_uno', new Date());
        this.router.navigate(['inicio']);  
        }
    }
  
  
    onSubmit(): void {
      const { correo, contrasena} = this.form;
  
      this.authService.login(correo, contrasena).subscribe({
        next: data => {
          this.storageService.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          this.reloadPage();
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
  
    reloadPage(): void {
      window.location.reload();
    }


    cuenta(): void {
    }


    restore(): void {
      this.timestampService.post_timestamp('restore-p', new Date());
      this.router.navigate(['restore-p']);
    }
    
    login(): void {
      this.timestampService.post_timestamp('restore-p', new Date());
      this.router.navigate(['ucontact']);  
    }


  }
