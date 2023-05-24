import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TredingDetailsPageRoutingModule } from './treding-details-routing.module';

import { TredingDetailsPage } from './treding-details.page';
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    TredingDetailsPageRoutingModule
  ],
  declarations: [TredingDetailsPage]
})
export class TredingDetailsPageModule {}
