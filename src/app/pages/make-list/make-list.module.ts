import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeListPageRoutingModule } from './make-list-routing.module';

import { MakeListPage } from './make-list.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    MakeListPageRoutingModule
  ],
  declarations: [MakeListPage]
})
export class MakeListPageModule {}
