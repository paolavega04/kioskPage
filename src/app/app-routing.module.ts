import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/login/auth/auth.component';
import { MainComponent } from './views/dashboard/main/main.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { BmiComponent } from './views/bmi/bmi.component';
import { PressureComponent } from './views/pressure/pressure.component';
import { StorageComponent } from './views/storage/storage.component';
import { UcontactComponent } from './views/ucontact/ucontact.component';
import { MetricsComponent } from './views/metrics/metrics.component';
import { RandomNumberComponent } from './random-number/random-number.component';


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: AuthComponent},
  {path: 'dashboard', component: MainComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'bmi', component: BmiComponent},
  {path: 'pressure', component: PressureComponent},
  {path: 'storage', component: StorageComponent},
  {path: 'ucontact', component: UcontactComponent},
  {path: 'metrics', component: MetricsComponent},
  { path: 'random', component: RandomNumberComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
