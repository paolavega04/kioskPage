import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services_/storage.service';
import { AuthService } from 'src/app/services_/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
    //loginForm!: FormGroup;

    form: any = {
      correo: null,
      contrasena: null
    };

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private storageService:StorageService, private router: Router) {}
  
  
    
    ngOnInit(): void {

      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        const id_cliente = this.storageService.getUser().id;
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
      this.router.navigate(['restore-p']);
    }
    
    login(): void {
      this.router.navigate(['ucontact']);  
    }


  }
