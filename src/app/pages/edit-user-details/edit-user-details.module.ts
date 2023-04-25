import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUserDetailsPageRoutingModule } from './edit-user-details-routing.module';

import { EditUserDetailsPage } from './edit-user-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditUserDetailsPageRoutingModule
  ],
  declarations: [EditUserDetailsPage]
})
export class EditUserDetailsPageModule {}
