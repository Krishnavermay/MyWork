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
      }
    ]
  },
  // {
  //   path: 'login',
  //   data: {
  //     title: 'login'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  //     }
  //   ]
  // },
  // {
//     {
//     path: 'home',
//     data: {
//       title: 'home'
//     },
//     children: [
//       {
//         path: '',
//         loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
//       }
//     ]
//   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
