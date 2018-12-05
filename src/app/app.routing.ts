import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewsComponent } from './pages/dashboard/components/news/news.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'news',
        component: NewsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
