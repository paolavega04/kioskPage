import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './views/login/login.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { SharedModule } from './shared/shared.module';
import { InicioComponent } from './views/inicio/inicio.component';
import { BmiComponent } from './views/bmi/bmi.component';
import { PressureComponent } from './views/pressure/pressure.component';
import { StorageComponent } from './views/storage/storage.component';
import { UcontactComponent } from './views/ucontact/ucontact.component';
import { MetricsComponent } from './views/metrics/metrics.component';
import { RestorePComponent } from './views/restore-p/restore-p.component';
import { NewPasswordComponent } from './views/new-password/new-password.component';
import { HttpClientModule } from '@angular/common/http';
import { VitalsService } from 'src/app/services_/data_vitals.service_normal';

import { VitalsServiceDes } from 'src/app/services_/data_vitals.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BmiComponent,
    PressureComponent,
    StorageComponent,
    UcontactComponent,
    MetricsComponent,
    RestorePComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [VitalsServiceDes,
              VitalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
