import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from 'src/app/angular-materials/angular-materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialsModule,
    FormsModule,
    //ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class LoginModule { }
