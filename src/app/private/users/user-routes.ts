import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../users/users.component').then((m) => m.UsersComponent),
    title: 'Users',
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../users/details/details.component').then(
        (m) => m.DetailsComponent
      ),
    title: 'Details',
  },
];
