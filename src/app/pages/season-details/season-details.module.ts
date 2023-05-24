import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonDetailsPageRoutingModule } from './season-details-routing.module';

import { SeasonDetailsPage } from './season-details.page';
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    SeasonDetailsPageRoutingModule
  ],
  declarations: [SeasonDetailsPage]
})
export class SeasonDetailsPageModule {}
