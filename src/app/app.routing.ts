import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '@app/core';

export const routes: Routes = [
  { path: '', redirectTo: '/applications', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];

export const routing = RouterModule.forRoot(routes);
