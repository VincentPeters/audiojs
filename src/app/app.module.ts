import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { PlayerService } from './providers/player.service';
import { TrackListComponent } from './components/track-list/track-list.component';
import { PlayerComponent } from './components/player/player.component';
import { MetaComponent } from './components/meta/meta.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { PlayerEffects } from './effects/player.effects';
import { FormatTimePipe } from './pipes/format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackListComponent,
    PlayerComponent,
    MetaComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    HttpModule,
    AppRoutingModule,
    EffectsModule.forRoot([PlayerEffects]),

    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [
    ElectronService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
