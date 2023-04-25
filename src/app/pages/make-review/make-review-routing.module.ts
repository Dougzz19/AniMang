import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeReviewPage } from './make-review.page';

const routes: Routes = [
  {
    path: '',
    component: MakeReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeReviewPageRoutingModule {}
