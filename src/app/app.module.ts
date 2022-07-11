import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { SlideMenuModule } from 'primeng/slidemenu';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {KnobModule} from 'primeng/knob';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PromoComponent } from './components/promo/promo.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ArrivalsComponent } from './components/arrivals/arrivals.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { TimerComponent } from './components/timer/timer.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { ServiceComponent } from './components/service/service.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    HomeComponent,
    HeaderComponent,
    PromoComponent,
    TrendingComponent,
    ArrivalsComponent,
    ReviewsComponent,
    TimerComponent,
    LatestNewsComponent,
    ServiceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    SlideMenuModule,
    TabViewModule,
    CarouselModule,
    KnobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
