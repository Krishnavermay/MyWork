import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'Layout'
    },
    children: [
      {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('./modules/signin/signin.module').then(m => m.SigninModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'map',
        loadChildren:() =>import('./modules/google-map/google-map.module').then(m => m.GoogleMapModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
