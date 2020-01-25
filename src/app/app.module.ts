import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AlertsComponent } from './alerts/alerts.component';
import { HttpClientModule } from '@angular/common/http';
import { FissuresComponent } from './fissures/fissures.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertsComponent,
    FissuresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class AppModule { }
