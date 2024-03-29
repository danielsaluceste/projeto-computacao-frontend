import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    loadChildren: () => import('./auth/first/first.module').then( m => m.FirstPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'recovery-password',
    loadChildren: () => import('./auth/recovery-password/recovery-password.module').then( m => m.RecoveryPasswordPageModule)
  },
  {
    path: 'post-product',
    loadChildren: () => import('./post-product/post-product.module').then( m => m.PostProductPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'city-selector',
    loadChildren: () => import('./city-selector/city-selector.module').then( m => m.CitySelectorPageModule)
  },
  {
    path: 'animal',
    loadChildren: () => import('./animal/animal.module').then( m => m.AnimalPageModule)
  },
  {
    path: 'my-posts',
    loadChildren: () => import('./my-posts/my-posts.module').then( m => m.MyPostsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
