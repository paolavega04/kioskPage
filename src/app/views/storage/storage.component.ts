import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimestampService } from 'src/app/services_/timestamp.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {
  timestamp: Date;
  constructor(private router: Router, private timestampService: TimestampService){
    this.timestamp = this.timestampService.getTimestamp();
  }  
  login(){
      this.router.navigate(['login']);
    }
}
