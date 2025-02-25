import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterFormCopyComponent } from './components/register-form copy/register-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'register2',
    component: RegisterFormCopyComponent,
  },
  {
    path: 'players',
    loadComponent: () =>
      import('./components/players/players.component').then(
        (m) => m.PlayersComponent
      ),
    data: { breadcrumb: 'Players' },
  },

  {
    path: 'tree-selector',
    loadComponent: () =>
      import('./components/tree-selector/tree-selector.component').then(
        (m) => m.TreeSelectorComponent
      ),
    data: { breadcrumb: 'Tree Selector' },
  },
];
