import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['animes']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),        
  },
  {
    path: 'anime-tab',
    loadChildren: () => import('./pages/anime-tab/anime-tab.module').then( m => m.AnimeTabPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'edit-user-details',
    loadChildren: () => import('./pages/edit-user-details/edit-user-details.module').then( m => m.EditUserDetailsPageModule)
  },
  {
    path: 'make-list',
    loadChildren: () => import('./pages/make-list/make-list.module').then( m => m.MakeListPageModule)
  },
  {
    path: 'edit-list/:id',
    loadChildren: () => import('./pages/edit-list/edit-list.module').then( m => m.EditListPageModule)
  },
  {
    path: 'make-review',
    loadChildren: () => import('./pages/make-review/make-review.module').then( m => m.MakeReviewPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
