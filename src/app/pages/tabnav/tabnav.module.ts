import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabnavPageRoutingModule } from './tabnav-routing.module';
import { TabnavPage } from './tabnav.page';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'tab-nav',
    component: TabnavPage,
    children: [
      {
        path: 'manga-tab',
        loadChildren: () => import('../manga-tab/manga-tab.module').then( m => m.MangaTabPageModule)
      },
      {
        path: 'animes',
        loadChildren: () => import('../animes/animes.module').then( m => m.AnimesPageModule),        
      },
      {
        path: 'top-anime',
        loadChildren: () => import('../top-anime/top-anime.module').then( m => m.TopAnimePageModule)
      },
      {
        path: 'animes/:id',
        loadChildren: () => import('../anime-details/anime-details.module').then( m => m.AnimeDetailsPageModule)
      },
      {
        path: 'make-list',
        loadChildren: () => import('../make-list/make-list.module').then( m => m.MakeListPageModule)
      },
      {
        path: 'edit-list/:id',
        loadChildren: () => import('../edit-list/edit-list.module').then( m => m.EditListPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule),        
      },
      {
        path: 'make-review',
        loadChildren: () => import('../make-review/make-review.module').then( m => m.MakeReviewPageModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('../modal/modal.module').then( m => m.ModalPageModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('../registration/registration.module').then( m => m.RegistrationPageModule)
      },
      {
        path: 'verify-email',
        loadChildren: () => import('../verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'password-reset',
        loadChildren: () => import('../password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: './tab-nav/top-anime',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: './tab-nav/top-anime',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnavPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabnavPage]
})
export class TabnavPageModule {}