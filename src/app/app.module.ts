import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { QuoteRemixerComponent } from './modules/quote-remixer/quote-remixer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HomeModule } from './modules/home/home.module';
import { QuoteRemixerModule } from './modules/quote-remixer/quote-remixer.module';




const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quote-remixer', component: QuoteRemixerComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, //
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatIconModule,
    HomeModule,
    QuoteRemixerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
