import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services_/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {
  constructor(private router: Router, private storageService:StorageService){}  
  nombre = this.storageService.getUser().nombre;
  login(){
      this.router.navigate(['login']);
    }
}
