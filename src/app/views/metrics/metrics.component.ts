import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent {
  constructor(private router: Router){}  

  storage(){
    this.router.navigate(['storage']);
}
}
