import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '@app/core';
import { TestPageComponent } from './test-page';

export const routes: Routes = [
  { path: '', redirectTo: '/test-page', pathMatch: 'full' },
  { path: 'test-page', component: TestPageComponent },
  { path: '**', component: NotFoundComponent},
];

export const routing = RouterModule.forRoot(routes);
