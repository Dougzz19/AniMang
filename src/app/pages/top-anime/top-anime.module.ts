import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopAnimePageRoutingModule } from './top-anime-routing.module';

import { TopAnimePage } from './top-anime.page';
import { PaginatePipe } from 'ngx-pagination';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    TopAnimePageRoutingModule
  ],
  declarations: [TopAnimePage]
})
export class TopAnimePageModule {}
