import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestoreService } from 'src/app/services_/restore-pwd.service';
import { StorageService } from 'src/app/services_/storage.service';

@Component({
  selector: 'app-restore-p',
  templateUrl: './restore-p.component.html',
  styleUrls: ['./restore-p.component.css']
})
export class RestorePComponent {

    constructor(private router: Router, private restoreService: RestoreService, private storageService: StorageService) {}

    form: any = {
      correo: null,
      respuesta_seguridad: null
    };

    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';

    ngOnInit(): void {

      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.router.navigate(['new-password']);
        }
    }

    onSubmit(): void {
    const { correo, respuesta_seguridad} = this.form;

    this.restoreService.restorepwd(correo, respuesta_seguridad).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
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
    
    newp(){
      //this.router.navigate(['new-password']);
    }
}