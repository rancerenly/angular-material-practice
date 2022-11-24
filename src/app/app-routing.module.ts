import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cat-fact', component: CatFactComponent
  },
  {
    path: 'posts', component: PostsComponent
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
