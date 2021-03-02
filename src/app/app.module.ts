import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RouterModule, Routes } from '@angular/router';
import { GlobalvarService } from './globalvar.service';
import { HomeComponent } from './home/home.component';

const ROUTES : Routes = [
  {path: "detail", component: DetailComponent},
  {path: "favorite", component: FavoriteComponent},
  {path: "home", component: HomeComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, DetailComponent, FavoriteComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
