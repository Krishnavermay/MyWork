import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayloutComponent } from './laylout/laylout.component';
// import { HomePageComponent } from '../home-page/home-page.component';

@NgModule({
  declarations: [LayloutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    // HomePageComponent
  ],
  exports:[LayloutComponent]
})
export class LayoutModule { }
