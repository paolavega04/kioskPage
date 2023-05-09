import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  loginForm!: FormGroup;

    constructor(private router: Router) {}

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        psw: new FormControl(''),
      });
    }

    login(){
      this.router.navigate(['inicio']);
    }
}
