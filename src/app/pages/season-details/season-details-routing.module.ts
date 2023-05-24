import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonDetailsPage } from './season-details.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonDetailsPageRoutingModule {}
