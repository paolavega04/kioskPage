import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restore-p',
  templateUrl: './restore-p.component.html',
  styleUrls: ['./restore-p.component.css']
})
export class RestorePComponent {

    constructor(private router: Router) {}
    login(){
      this.router.navigate(['login']);
    }
}
