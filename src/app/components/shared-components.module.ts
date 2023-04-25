import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AnimesPageModule } from '../pages/animes/animes.module';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    AnimesPageModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class SharedComponentsModule { }
