import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes:Routes = [
  { path: '' , component : HomeComponent },
  { path: 'about-me' , component : AboutMeComponent  },
  { path: 'gallery' , component : GalleryComponent  },
  { path: 'blog', component : BlogComponent },
  { path: 'contact', component : ContactComponent },



];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroSectionComponent,
    GalleryComponent,
    BlogComponent,
    AboutMeComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
