import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayloutComponent } from './laylout/laylout.component';

const routes: Routes = [{
  path:'',
  component:LayloutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
