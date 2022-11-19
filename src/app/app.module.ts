import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JsonPlaceholderComponent } from './components/json-placeholder/json-placeholder.component';
import { FormsModule } from '@angular/forms';
import { AllPostsComponent } from './components/json-placeholder/all-posts/all-posts.component';
import { PostDetailsComponent } from './components/json-placeholder/post-details/post-details.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CatFactComponent,
        JsonPlaceholderComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        AllPostsComponent,
        PostDetailsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatGridListModule,
        MatInputModule,
        FormsModule,
    ]
})
export class AppModule { }
