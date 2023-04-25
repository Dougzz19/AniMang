import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeTabPage } from './anime-tab.page';

const routes: Routes = [
  {
    path: '',
    component: AnimeTabPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'top-anime',
        loadChildren: () => import('../top-anime/top-anime.module').then( m => m.TopAnimePageModule)
      },
      {
        path: 'animes',
        loadChildren: () => import('../animes/animes.module').then( m => m.AnimesPageModule),        
      },
      {
        path: 'animes/:id',
        loadChildren: () => import('../anime-details/anime-details.module').then( m => m.AnimeDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/anime-tab/top-anime',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/anime-tab/top-anime',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeTabPageRoutingModule {}
