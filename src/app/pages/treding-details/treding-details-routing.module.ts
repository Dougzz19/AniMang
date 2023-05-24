import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TredingDetailsPage } from './treding-details.page';

const routes: Routes = [
  {
    path: '',
    component: TredingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TredingDetailsPageRoutingModule {}
