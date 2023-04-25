import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimesPageRoutingModule } from './animes-routing.module';
import { PaginatePipe } from 'ngx-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';

import { AnimesPage } from './animes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    IonicModule,
    NgxPaginationModule,
    AnimesPageRoutingModule
  ],
  declarations: [AnimesPage,UserInfoComponent]
})
export class AnimesPageModule {}
