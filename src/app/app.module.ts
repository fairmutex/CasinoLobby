import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, ROOT_REDUCERS } from './state/app.reducer';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';
import { EffectsModule } from '@ngrx/effects';
import { AppLayoutModule } from './layout/app-layout.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GamesData } from './mock/game.data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot([]),
    // StoreDevtoolsModule.instrument({
    //   name: 'Casino Lobby DevTools',
    //   maxAge:25,
    //   logOnly: environment.production
    // }),
    FlexLayoutModule,
    MaterialModule,
    AppLayoutModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),

    // environment.production !== true ? HttpClientInMemoryWebApiModule.forRoot(GamesData, { delay: 4000 }) : [],
    HttpClientInMemoryWebApiModule.forRoot(GamesData, { delay: 0 }) ,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
