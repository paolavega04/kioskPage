import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestoreService } from 'src/app/services_/restore-pwd.service';
import { StorageService } from 'src/app/services_/storage.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  constructor(private router: Router, private storageService: StorageService,private restoreService: RestoreService) {}

  form: any = {
    pwdCliente: null,
    pwdContacto: null, 
    preguntaCliente: null, 
    preguntaContacto: null
  };
   
  isLoggedIn = false;
  isLoginFailed = false;
  isSuccessful = false;
  errorMessage = '';

  ngOnInit(): void {

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['new-password']);
      }
  }

  onSubmit(): void {
  const {pwdCliente,
        pwdContacto, 
        preguntaCliente, 
        preguntaContacto} = this.form;

  this.restoreService.get_new_pwd(pwdCliente,
                                  pwdContacto, 
                                  preguntaCliente, 
                                  preguntaContacto)
    .subscribe({
    next: data => {
      this.storageService.clean();

      //this.isLoginFailed = false;
      this.isLoggedIn = false;
      this.router.navigate(['login']);
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


    login(){
      this.router.navigate(['login']);
    }
}
