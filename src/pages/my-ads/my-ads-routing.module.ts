import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAdsPage } from './my-ads.page';

const routes: Routes = [
  {
    path: '',
    component: MyAdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAdsPageRoutingModule {}
