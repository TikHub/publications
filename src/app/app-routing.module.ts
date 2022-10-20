import { Routes } from '@angular/router';
import { HomepageComponent } from './public/homepage/homepage.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomepageComponent,
    title: 'Homepage',
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./private/users/users.component').then((m) => m.UsersComponent),
    title: 'Users',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404',
  },
];
