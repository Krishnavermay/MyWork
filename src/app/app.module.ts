import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './modules/layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapComponent } from './modules/google-map/google-map.component';
// import { HomePageComponent } from './modules/home-page/home-page.component';
// import { SigninComponent } from './modules/signin/signin.component';
// import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    // SigninComponent,
    // HomePageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'YOUR-API-KEY-HERE',
    //   libraries: ['places']
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
