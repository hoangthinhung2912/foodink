import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import { TestComponent } from './components/test/test.component';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselModule } from 'angular4-carousel';
import { FooterComponent } from './components/footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TestComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    OwlModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
