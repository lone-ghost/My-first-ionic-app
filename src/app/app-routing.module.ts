import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-ads',
    loadChildren: () => import('../pages/my-ads/my-ads.module').then( m => m.MyAdsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('../pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'create-ad',
    loadChildren: () => import('../pages/create-ad/create-ad.module').then( m => m.CreateAdPageModule)
  },
  {
    path: 'detail-ad/:id',
    loadChildren: () => import('../pages/detail-ad/detail-ad.module').then( m => m.DetailAdPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../pages/auth/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('../pages/auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],

  exports: [RouterModule]
})
  
export class AppRoutingModule { }
