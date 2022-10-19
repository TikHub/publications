import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
      import('./users/users.component').then((m) => m.UsersComponent),
    title: 'Users',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404',
  },
];
