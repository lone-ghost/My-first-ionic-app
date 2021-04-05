import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAdPageRoutingModule } from './detail-ad-routing.module';

import { DetailAdPage } from './detail-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAdPageRoutingModule
  ],
  declarations: [DetailAdPage]
})
export class DetailAdPageModule {}
