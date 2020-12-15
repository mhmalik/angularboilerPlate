import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegisterComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      component: HomeComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
