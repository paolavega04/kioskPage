import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

    /*form: any = {
      correo: null,
      contrasena: null
    };*/

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private storageService:StorageService, private router: Router) {}
    loginForm!:FormGroup;


    
    ngOnInit() {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        psw: new FormControl(''),
      });
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        const id_cliente = this.storageService.getUser().id;
        this.router.navigate(['inicio']);
      }
    }

    
    onSubmit(form: FormGroup) {
      const email = form.value.email;
      const psw = form.value.psw
      
      this.authService.login(email, psw).subscribe({
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

    /*login(){
      this.router.navigate(['ucontact']);
    }
    cuenta(){
      this.router.navigate(['inicio']);
    }
    restore(){
      this.router.navigate(['restore-p']);
    }*/
}
