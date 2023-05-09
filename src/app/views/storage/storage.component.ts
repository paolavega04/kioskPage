import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {
  constructor(private router: Router){}  
  login(){
      this.router.navigate(['login']);
    }
}
