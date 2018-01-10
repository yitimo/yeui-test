import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { YINModule, YupModule, yeuiThemeConfig } from 'yeui';

import { AppComponent } from './app.component';
// config the theme
yeuiThemeConfig('weui');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
