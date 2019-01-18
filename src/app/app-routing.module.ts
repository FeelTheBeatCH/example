import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerOverviewComponent} from './customer/customer-overview/customer-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {path: 'customers', component: CustomerOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
