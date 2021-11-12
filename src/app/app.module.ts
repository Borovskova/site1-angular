import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Banner1Component } from './components/banner1/banner1.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { Banner3Component } from './components/banner3/banner3.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { Banner4Component } from './components/banner4/banner4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Banner1Component,
    Banner2Component,
    Banner3Component,
    SliderComponent,
    Banner4Component
  ],
  imports: [
    BrowserModule,
    NgxTinySliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NgxTinySliderModule
  ],
})
export class AppModule { }
