import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainersComponent }  from './containers/containers.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ContainersComponent
  },
  {
    path: 'containers',
    component: ContainersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
