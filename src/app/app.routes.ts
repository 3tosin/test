import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' }, // Default route
  {
    path: 'hello',
    component: HelloComponent,
  },
];
