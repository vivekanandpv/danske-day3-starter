import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FinanceComponent } from './finance/finance.component';
import { DevComponent } from './dev/dev.component';
import { HrComponent } from './hr/hr.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'finance',
    component: FinanceComponent,
  },
  {
    path: 'dev',
    component: DevComponent,
  },
  {
    path: 'hr',
    children: [
      {
        path: '',
        component: HrComponent,
      },
      {
        path: ':city',
        component: HrComponent,
      },
      {
        path: ':city/:year',
        component: HrComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
