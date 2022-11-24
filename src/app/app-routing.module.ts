import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JsonPlaceholderComponent } from './components/json-placeholder/json-placeholder.component';
import { UsersComponent } from './components/json-placeholder/users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cat-fact', component: CatFactComponent
  },
  {
    path: 'json-placeholder', component: JsonPlaceholderComponent,
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
