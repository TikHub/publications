import { Routes } from '@angular/router';
import { DetailsComponent } from './private/users/details/details.component';
import { HomepageComponent } from './public/homepage/homepage.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

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
    path: 'users/:id',
    component: DetailsComponent,
    title: 'Details',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: '404',
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
