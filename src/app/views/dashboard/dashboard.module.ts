import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from 'src/app/angular-materials/angular-materials.module';
import { OrderComponent } from './order/order.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialsModule,
    SharedModule
  ]
})
export class DashboardModule { }
