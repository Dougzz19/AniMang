import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUserDetailsPage } from './edit-user-details.page';

const routes: Routes = [
  {
    path: '',
    component: EditUserDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditUserDetailsPageRoutingModule {}
