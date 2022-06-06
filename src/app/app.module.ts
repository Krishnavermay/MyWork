import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './modules/layout/layout.module';
// import { HomePageComponent } from './modules/home-page/home-page.component';
// import { SigninComponent } from './modules/signin/signin.component';
// import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    // SigninComponent,
    // HomePageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
