import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducers } from './store/app.states';
import { routing } from './app.routing';
import { AuthGuard } from './guards';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/dashboard/components/news/news.component';
import { HeaderComponent } from './pages/dashboard/components/header/header.component';
import { FooterComponent } from './pages/dashboard/components/footer/footer.component';

import {
  ItemEffects,
  NewsEffects,
} from './store/effects';
import {
  ItemService,
  NewsService,
} from './services';
import { TableComponent } from './pages/dashboard/components/table/table.component';
import { PaginationBarComponent } from './pages/dashboard/components/pagination-bar/pagination-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    PaginationBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      ItemEffects,
      NewsEffects,
    ]),
    routing,
  ],
  providers: [
    AuthGuard,
    ItemService,
    NewsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
