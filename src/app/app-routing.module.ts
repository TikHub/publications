import { Routes } from '@angular/router';

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
    loadChildren: () =>
      import('./private/users/user-routes').then((m) => m.routes),
    title: 'Users',
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
