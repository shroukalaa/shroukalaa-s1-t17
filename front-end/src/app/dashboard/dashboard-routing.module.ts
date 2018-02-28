import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FashionComponent } from './fashion/fashion.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
    {
      path: '',
      loadChildren : './about/about.module#AboutModule'
    },
    {
      path:'items',
      loadChildren : './items/items.module#ItemsModule'
    },
    { path: 'authe',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    {
      path: 'signup',
      component: SignupComponent
    }
    ]},
    {
      path: 'fashionstore',
      component: FashionComponent
    }
      ],

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
