import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeTabPageRoutingModule } from './anime-tab-routing.module';

import { AnimeTabPage } from './anime-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeTabPageRoutingModule
  ],
  declarations: [AnimeTabPage]
})
export class AnimeTabPageModule {}
