import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MakeListPage } from './make-list.page';

const routes: Routes = [
  {
    path: '',
    component: MakeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    IonicModule,
    ReactiveFormsModule,],
  exports: [RouterModule],
})
export class MakeListPageRoutingModule {}
