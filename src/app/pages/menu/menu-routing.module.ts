import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [

  {
    path: '',
    component: MenuPage,
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
        path: 'seasons',
        loadChildren: () => import('../seasons/seasons.module').then( m => m.SeasonsPageModule)
      },
      {
        path: 'uploads',
        loadChildren: () => import('../uploads/uploads.module').then( m => m.UploadsPageModule)
      },
      {
        path: 'animes/:id',
        loadChildren: () => import('../anime-details/anime-details.module').then( m => m.AnimeDetailsPageModule)
      },
      {
        path: 'post/:id',
        loadChildren: () => import('../post/post.module').then( m => m.PostPageModule)
      },
      {
        path: 'seasons/:id',
        loadChildren: () => import('../season-details/season-details.module').then( m => m.SeasonDetailsPageModule)
      },
      {
        path: 'top-anime/:id',
        loadChildren: () => import('../treding-details/treding-details.module').then( m => m.TredingDetailsPageModule)
      },
      {
        path: 'news/:id',
        loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: '',
        redirectTo: '/menu/animes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/animes',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
