import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { YINModule, YupModule, yeuiThemeConfig } from 'yeui';

import { AppComponent } from './app.component';
import { ButtonComponent } from './pages/button/button.component';
import { InputComponent } from './pages/input/input.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app.route';
// config the theme
yeuiThemeConfig('weui');

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YupModule,
    YINModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
