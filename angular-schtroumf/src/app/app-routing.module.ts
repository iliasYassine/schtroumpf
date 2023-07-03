import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchtroumfDetailsComponent } from './components/schtroumf-details/schtroumf-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './components/login-component/login-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
{ path: 'dashboard', component: SchtroumfDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
