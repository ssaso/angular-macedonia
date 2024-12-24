import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';

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
    path: 'players',
    loadComponent: () =>
      import('./components/players/players.component').then(
        (m) => m.PlayersComponent
      ),
  },
  {
    path: 'tree-selector',
    loadComponent: () =>
      import('./components/tree-selector/tree-selector.component').then(
        (m) => m.TreeSelectorComponent
      ),
  },
];
