import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAdsPageRoutingModule } from './my-ads-routing.module';

import { MyAdsPage } from './my-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAdsPageRoutingModule
  ],
  declarations: [MyAdsPage]
})
export class MyAdsPageModule {}
