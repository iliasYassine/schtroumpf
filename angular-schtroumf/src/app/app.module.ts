import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchtroumfDetailsComponent } from './components/schtroumf-details/schtroumf-details.component';
import { SchtroumfService } from './services/schtroumf.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponentComponent } from './components/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SchtroumfDetailsComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
