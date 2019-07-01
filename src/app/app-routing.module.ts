import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'orders',
    // doesn't work with 'src/app/customers/customers.module' either in server-side
    // generates extra factory file under `dist/server`.
    // loadChildren: () => import('src/app/customers/customers.module').then(mod => mod.CustomersModule)
    // this works but it is the old way to do it and no extra js file in under the dist/server
    // https://angular.io/guide/router#milestone-6-asynchronous-routing
    loadChildren: 'src/app/customers/customers.module#CustomersModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
