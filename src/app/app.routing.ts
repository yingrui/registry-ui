import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent }  from './images/images.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ImagesComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
