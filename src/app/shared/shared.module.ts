import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from '../angular-materials/angular-materials.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
