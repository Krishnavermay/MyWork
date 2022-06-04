import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayloutComponent } from './laylout/laylout.component';

@NgModule({
  declarations: [LayloutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LayloutComponent
  ],
  exports:[LayloutComponent]
})
export class LayoutModule { }
