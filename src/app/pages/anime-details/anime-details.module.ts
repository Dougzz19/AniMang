import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { IonicModule } from '@ionic/angular';
import { NgxPaginationModule } from 'ngx-pagination'

import { AnimeDetailsPageRoutingModule } from './anime-details-routing.module';

import { AnimeDetailsPage } from './anime-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    AnimeDetailsPageRoutingModule
  ],
  declarations: [AnimeDetailsPage]
})
export class AnimeDetailsPageModule {}
