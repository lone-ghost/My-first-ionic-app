import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAdPage } from './detail-ad.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAdPageRoutingModule {}
